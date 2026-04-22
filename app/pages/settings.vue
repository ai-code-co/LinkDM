<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

definePageMeta({
  middleware: 'auth',
})

const { theme, setTheme, THEMES } = useTheme()
const user = useSupabaseUser()
const session = useSupabaseSession()
const supabase = useSupabaseClient()
const config = useRuntimeConfig()
const activeTab = ref<'profile' | 'appearance'>('profile')
const subscriptionLoading = ref(true)
const cancelLoading = ref(false)
const showCancelConfirm = ref(false)
const cancelError = ref('')
const cancelSuccess = ref('')
const subscription = ref<{
  plan_code: string | null
  plan_tier: string | null
  plan_name: string | null
  status: string | null
  updated_at: string | null
} | null>(null)

const current = computed(() => theme.value)
const userClaims = computed(() => {
  return user.value as {
    sub?: string
    email?: string
    user_metadata?: {
      first_name?: string
      last_name?: string
      business_name?: string
    }
  } | null
})
const profileRows = computed(() => {
  const claims = userClaims.value
  const metadata = claims?.user_metadata ?? {}
  return [
    { label: 'User ID', value: claims?.sub || '-' },
    { label: 'Email', value: claims?.email || '-' },
    { label: 'First Name', value: metadata.first_name?.trim() || '-' },
    { label: 'Last Name', value: metadata.last_name?.trim() || '-' },
    { label: 'Business Name', value: metadata.business_name?.trim() || '-' },
    {
      label: 'Theme Preference',
      value: THEMES.find(item => item.id === current.value)?.name || current.value,
    },
  ]
})
const hasActiveSubscription = computed(() => {
  if (!subscription.value) return false
  return (subscription.value.status || '').toLowerCase() === 'active'
})
const subscriptionPlanName = computed(() => {
  if (!hasActiveSubscription.value) return 'Free'
  const dbName = (subscription.value?.plan_name || '').trim()
  if (dbName) return dbName

  const tier = (subscription.value?.plan_tier || '').toLowerCase()
  if (tier === 'pro') return 'Pro'
  if (tier === 'platinum') return 'Platinum'
  return 'Free'
})
const subscriptionStatus = computed(() => {
  if (!subscription.value) return 'Free'
  const status = (subscription.value.status || 'active').toLowerCase()
  if (status === 'active') return 'Active'
  if (status === 'approval_pending') return 'Approval pending'
  if (status === 'cancelled') return 'Cancelled'
  if (status === 'suspended') return 'Suspended'
  if (status === 'pending') return 'Pending'
  return status.charAt(0).toUpperCase() + status.slice(1)
})
const subscriptionStatusClass = computed(() => {
  const status = subscriptionStatus.value.toLowerCase()
  if (status === 'active') return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
  if (status === 'pending') return 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
  if (status === 'cancelled' || status === 'suspended') {
    return 'bg-rose-500/15 text-rose-700 dark:text-rose-400'
  }
  return 'bg-brand/15 text-brand'
})
const subscriptionLastSynced = computed(() => {
  if (subscriptionLoading.value) return 'Syncing...'
  if (!subscription.value?.updated_at) return 'Not synced yet'
  return new Date(subscription.value.updated_at).toLocaleString()
})
const canCancelSubscription = computed(() => {
  if (!hasActiveSubscription.value) return false
  const tier = (subscription.value?.plan_tier || '').toLowerCase()
  return tier === 'pro' || tier === 'platinum'
})

async function loadSubscription() {
  const userId = userClaims.value?.sub
  if (!userId) {
    subscription.value = null
    subscriptionLoading.value = false
    return
  }

  subscriptionLoading.value = true
  const subscriptions = supabase.from('subscriptions') as any
  const { data, error } = await subscriptions
    .select('plan_code,plan_tier,plan_name,status,updated_at')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('Failed to load subscription info:', error.message)
    subscription.value = null
  }
  else {
    subscription.value = (data as {
      plan_code: string | null
      plan_tier: string | null
      plan_name: string | null
      status: string | null
      updated_at: string | null
    } | null) ?? null
  }
  subscriptionLoading.value = false
}

onMounted(loadSubscription)
watch(() => userClaims.value?.sub, () => {
  loadSubscription()
})

async function cancelSubscription() {
  if (!canCancelSubscription.value || cancelLoading.value) return
  const accessToken = session.value?.access_token
  if (!accessToken) {
    cancelError.value = 'Please log in again to manage subscription.'
    return
  }

  cancelLoading.value = true
  cancelError.value = ''
  cancelSuccess.value = ''

  try {
    await $fetch(`${config.public.apiBaseUrl}/payments/paypal/subscriptions/cancel`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        reason: 'Cancelled by user from settings page',
      },
    })
    cancelSuccess.value = 'Subscription cancelled successfully. Your account is now on Free plan.'
    await loadSubscription()
  }
  catch (error) {
    cancelError.value =
      error instanceof Error
        ? error.message
        : 'Unable to cancel subscription right now. Please try again.'
  }
  finally {
    cancelLoading.value = false
  }
}

function openCancelConfirm() {
  if (!canCancelSubscription.value || cancelLoading.value) return
  showCancelConfirm.value = true
  cancelError.value = ''
  cancelSuccess.value = ''
}

function closeCancelConfirm() {
  if (cancelLoading.value) return
  showCancelConfirm.value = false
}

async function confirmCancelSubscription() {
  await cancelSubscription()
  if (!cancelError.value) {
    showCancelConfirm.value = false
  }
}

function isSelected(id: (typeof THEMES)[number]['id']) {
  return current.value === id
}

async function selectTheme(id: (typeof THEMES)[number]['id']) {
  await setTheme(id, { syncProfile: true })
}
</script>

<template>
  <div class="bg-canvas pb-12 pt-8 sm:pb-14 sm:pt-10">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-eyebrow">
        Settings
      </p>
      <h1 class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
        Account Preferences
      </h1>
      <div class="mt-6 flex flex-wrap gap-2 border-b border-edge pb-3">
        <button
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          :class="activeTab === 'profile' ? 'bg-brand text-on-brand' : 'bg-surface text-ink hover:bg-btn-muted'"
          @click="activeTab = 'profile'"
        >
          Profile
        </button>
        <button
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          :class="activeTab === 'appearance' ? 'bg-brand text-on-brand' : 'bg-surface text-ink hover:bg-btn-muted'"
          @click="activeTab = 'appearance'"
        >
          Appearance
        </button>
      </div>

      <section
        v-if="activeTab === 'profile'"
        class="mt-6 rounded-2xl border border-edge bg-surface p-4 sm:mt-8 sm:p-6"
      >
        <h2 class="text-lg font-bold text-ink sm:text-xl">
          Profile Information
        </h2>
        <p class="mt-1.5 text-sm text-ink-muted sm:text-base">
          Details connected to your account profile.
        </p>
        <div class="mt-5 rounded-2xl border border-edge bg-gradient-to-br from-brand/10 via-surface to-surface p-4 shadow-sm sm:p-5">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-semibold text-ink">
              Subscription
            </p>
            <span
              class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold"
              :class="subscriptionStatusClass"
            >
              {{ subscriptionStatus }}
            </span>
          </div>
          <div class="mt-4 grid gap-3 sm:grid-cols-3">
            <div class="rounded-xl border border-edge bg-surface/80 px-4 py-3">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-ink-subtle">
                Current Plan
              </p>
              <p class="mt-1 text-sm font-bold text-ink sm:text-base">
                {{ subscriptionPlanName }}
              </p>
            </div>
            <div class="rounded-xl border border-edge bg-surface/80 px-4 py-3">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-ink-subtle">
                Status
              </p>
              <p class="mt-1 text-sm font-bold text-ink sm:text-base">
                {{ subscriptionStatus }}
              </p>
            </div>
            <div class="rounded-xl border border-edge bg-surface/80 px-4 py-3">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-ink-subtle">
                Last Synced
              </p>
              <p class="mt-1 text-sm font-bold text-ink sm:text-base">
                {{ subscriptionLastSynced }}
              </p>
            </div>
          </div>
          <div
            v-if="canCancelSubscription"
            class="mt-4 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              class="rounded-xl bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-200 disabled:cursor-not-allowed disabled:opacity-60"
              :disabled="cancelLoading"
              @click="openCancelConfirm"
            >
              {{ cancelLoading ? 'Cancelling...' : 'Cancel Subscription' }}
            </button>
            <p
              v-if="cancelSuccess"
              class="text-sm font-medium text-emerald-600"
            >
              {{ cancelSuccess }}
            </p>
          </div>
          <p
            v-if="cancelError"
            class="mt-3 text-sm font-medium text-rose-600"
          >
            {{ cancelError }}
          </p>
        </div>
        <dl class="mt-5 space-y-3">
          <div
            v-for="row in profileRows"
            :key="row.label"
            class="flex items-start justify-between gap-4 rounded-xl border border-edge px-4 py-3"
          >
            <dt class="text-sm font-semibold text-ink">
              {{ row.label }}
            </dt>
            <dd class="max-w-[60%] break-words text-right text-sm text-ink-muted">
              {{ row.value }}
            </dd>
          </div>
        </dl>
      </section>

      <section v-else class="mt-6 sm:mt-8">
        <p class="max-w-2xl text-sm text-ink-muted sm:text-base">
          Choose a color theme for LinkDM. Your choice is saved to your account and synced across devices.
        </p>
        <div
          class="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4"
          role="radiogroup"
          aria-label="Site color theme"
        >
          <button
            v-for="item in THEMES"
            :key="item.id"
            type="button"
            role="radio"
            :aria-checked="isSelected(item.id)"
            class="group relative flex flex-col rounded-2xl border-2 p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:p-5"
            :class="
              isSelected(item.id)
                ? 'border-brand bg-surface shadow-md'
                : 'border-edge bg-surface hover:border-edge-strong'
            "
            @click="selectTheme(item.id)"
          >
            <span
              v-if="isSelected(item.id)"
              class="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-on-brand sm:right-4 sm:top-4 sm:h-6 sm:w-6"
              aria-hidden="true"
            >
              <svg class="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>

            <div
              class="mb-3 overflow-hidden rounded-xl border border-edge sm:mb-4"
              aria-hidden="true"
            >
              <div
                class="flex h-12 items-center gap-2 border-b border-edge px-2.5 sm:h-14 sm:px-3"
                :class="item.scheme === 'dark' ? 'bg-zinc-900' : 'bg-white'"
              >
                <span
                  class="h-2 w-2 rounded-full"
                  :class="item.scheme === 'dark' ? 'bg-zinc-600' : 'bg-zinc-300'"
                />
                <span
                  class="h-2 w-14 rounded-full sm:w-16"
                  :class="item.scheme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-200'"
                />
                <span
                  class="ml-auto h-5 w-12 rounded-md sm:h-6 sm:w-14"
                  :class="item.scheme === 'dark' ? 'bg-sky-500' : 'bg-[#1487fa]'"
                />
              </div>
              <div
                class="h-14 px-2.5 py-2 sm:h-16 sm:px-3"
                :class="item.scheme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'"
              >
                <div
                  class="h-2 max-w-[180px] rounded w-[72%]"
                  :class="item.scheme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-300'"
                />
                <div
                  class="mt-2 h-2 max-w-[120px] rounded w-[48%]"
                  :class="item.scheme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'"
                />
              </div>
            </div>

            <span class="text-[11px] font-semibold uppercase tracking-wide text-ink-subtle sm:text-xs">
              {{ item.scheme === 'dark' ? 'Dark' : 'Light' }}
            </span>
            <span class="mt-1 text-base font-bold text-ink sm:text-lg">{{ item.name }}</span>
            <span class="mt-1.5 text-xs leading-relaxed text-ink-muted sm:mt-2 sm:text-sm">{{ item.description }}</span>
          </button>
        </div>
      </section>
    </div>

    <div
      v-if="showCancelConfirm"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cancel-subscription-title"
    >
      <div class="w-full max-w-md rounded-2xl border border-edge bg-surface p-5 shadow-2xl sm:p-6">
        <h3
          id="cancel-subscription-title"
          class="text-lg font-bold text-ink"
        >
          Cancel subscription?
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-ink-muted">
          This will cancel your current paid plan and move your account back to Free.
        </p>
        <div class="mt-5 flex justify-end gap-3">
          <button
            type="button"
            class="rounded-xl bg-btn-muted px-4 py-2 text-sm font-semibold text-ink transition hover:bg-btn-muted-hover disabled:opacity-60"
            :disabled="cancelLoading"
            @click="closeCancelConfirm"
          >
            Keep Plan
          </button>
          <button
            type="button"
            class="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:opacity-60"
            :disabled="cancelLoading"
            @click="confirmCancelSubscription"
          >
            {{ cancelLoading ? 'Cancelling...' : 'Yes, Cancel' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

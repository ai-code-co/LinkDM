<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
const config = useRuntimeConfig()
const session = useSupabaseSession()

interface FacebookConnection {
  id: string
  page_id: string
  page_name: string | null
  webhook_subscribed: boolean
  created_at: string
  updated_at: string
}

const facebookLoading = ref(true)
const facebookConnectLoading = ref(false)
const facebookDisconnectLoading = ref(false)
const facebookConnections = ref<FacebookConnection[]>([])
const facebookError = ref('')

const facebookConnected = computed(() => facebookConnections.value.length > 0)

const facebookBanner = computed(() => {
  const status = route.query.facebook
  if (status === 'connected') {
    const pages = typeof route.query.pages === 'string' ? route.query.pages : ''
    return pages
      ? `Facebook connected successfully: ${pages}`
      : 'Facebook connected successfully.'
  }
  if (status === 'error') {
    const message = typeof route.query.message === 'string' ? route.query.message : 'Connection failed.'
    return `Facebook connection failed: ${message}`
  }
  return ''
})

async function loadFacebookStatus() {
  const accessToken = session.value?.access_token
  if (!accessToken) {
    facebookConnections.value = []
    facebookLoading.value = false
    return
  }

  facebookLoading.value = true
  facebookError.value = ''

  try {
    const response = await $fetch<{ connected: boolean, connections: FacebookConnection[] }>(
      `${config.public.apiBaseUrl}/auth/facebook/status`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    facebookConnections.value = response.connections ?? []
  }
  catch (error) {
    facebookError.value =
      error instanceof Error ? error.message : 'Unable to load Facebook connection status.'
    facebookConnections.value = []
  }
  finally {
    facebookLoading.value = false
  }
}

async function connectFacebook() {
  const accessToken = session.value?.access_token
  if (!accessToken || facebookConnectLoading.value) return

  facebookConnectLoading.value = true
  facebookError.value = ''

  try {
    const response = await $fetch<{ url: string }>(
      `${config.public.apiBaseUrl}/auth/facebook/connect`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    if (response.url) {
      window.location.href = response.url
      return
    }
    facebookError.value = 'Facebook connect URL was not returned.'
  }
  catch (error) {
    facebookError.value =
      error instanceof Error ? error.message : 'Unable to start Facebook connection.'
  }
  finally {
    facebookConnectLoading.value = false
  }
}

async function disconnectFacebook() {
  const accessToken = session.value?.access_token
  if (!accessToken || facebookDisconnectLoading.value) return

  facebookDisconnectLoading.value = true
  facebookError.value = ''

  try {
    await $fetch(`${config.public.apiBaseUrl}/auth/facebook/disconnect`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    facebookConnections.value = []
  }
  catch (error) {
    facebookError.value =
      error instanceof Error ? error.message : 'Unable to disconnect Facebook.'
  }
  finally {
    facebookDisconnectLoading.value = false
  }
}

onMounted(loadFacebookStatus)
</script>

<template>
  <div class="bg-canvas pb-16 pt-10 sm:pb-20 sm:pt-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-xs font-bold uppercase tracking-wider text-eyebrow">
        Features
      </p>
      <h1 class="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Smart Channel Features
      </h1>
      <p class="mt-3 max-w-3xl text-sm text-ink-muted sm:text-base">
        Connect your social accounts and automate replies to comments and DMs with AI-powered flows.
      </p>

      <p
        v-if="facebookBanner"
        class="mt-6 rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-ink"
      >
        {{ facebookBanner }}
      </p>

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          class="group rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
            Instagram
          </div>
          <h2 class="text-xl font-semibold text-ink">
            Instagram Automation
          </h2>

          <div class="mt-5 space-y-4">
            <div class="rounded-xl bg-white/80 p-4">
              <h3 class="text-sm font-semibold text-ink">
                Feature 1: Comment to DM
              </h3>
              <p class="mt-2 text-sm leading-6 text-ink-muted">
                When someone comments on your Instagram post, this feature automatically replies to the comment
                and sends a private DM.
              </p>
              <button
                type="button"
                class="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                connect for DM replies
              </button>
            </div>

            <div class="rounded-xl bg-white/80 p-4">
              <h3 class="text-sm font-semibold text-ink">
                Feature 2: DM Question Flow
              </h3>
              <p class="mt-2 text-sm leading-6 text-ink-muted">
                When someone sends a DM to your Instagram account, this feature automatically asks several
                questions.
              </p>
              <button
                type="button"
                class="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
              >
                connect for comment replies
              </button>
            </div>
          </div>
        </article>

        <article
          class="group rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            WhatsApp
          </div>
          <h2 class="text-xl font-semibold text-ink">
            WhatsApp DM Automation
          </h2>
          <p class="mt-4 text-sm leading-6 text-ink-muted">
            When someone sends a message to your WhatsApp number or account, this feature automatically asks
            several questions to the user.
          </p>

          <button
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            connect for DM replies
          </button>
        </article>

        <article
          class="group rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Facebook
          </div>
          <h2 class="text-xl font-semibold text-ink">
            Facebook DM Automation
          </h2>
          <p class="mt-4 text-sm leading-6 text-ink-muted">
            When someone sends a message to your Facebook account DM, this feature automatically asks several
            questions to the user.
          </p>

          <div
            v-if="facebookConnected"
            class="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3"
          >
            <p class="text-sm font-semibold text-blue-900">
              Connected
            </p>
            <ul class="mt-2 space-y-1 text-sm text-blue-800">
              <li
                v-for="connection in facebookConnections"
                :key="connection.id"
              >
                {{ connection.page_name || connection.page_id }}
                <span
                  v-if="!connection.webhook_subscribed"
                  class="text-amber-700"
                >
                  (webhook pending)
                </span>
              </li>
            </ul>
          </div>

          <p
            v-if="facebookError"
            class="mt-4 text-sm text-rose-600"
          >
            {{ facebookError }}
          </p>

          <button
            v-if="!facebookConnected"
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="facebookLoading || facebookConnectLoading"
            @click="connectFacebook"
          >
            {{ facebookConnectLoading ? 'Redirecting to Facebook...' : 'connect for DM replies' }}
          </button>

          <button
            v-else
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-blue-300 bg-white px-4 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="facebookDisconnectLoading"
            @click="disconnectFacebook"
          >
            {{ facebookDisconnectLoading ? 'Disconnecting...' : 'Disconnect Facebook' }}
          </button>
        </article>
      </div>
    </div>
  </div>
</template>

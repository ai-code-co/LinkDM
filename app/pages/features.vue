<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
const router = useRouter()
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

interface WhatsAppConnection {
  id: string
  phone_number_id: string
  display_phone_number: string | null
  verified_name: string | null
  waba_name: string | null
  webhook_subscribed: boolean
  created_at: string
  updated_at: string
}

interface InstagramConnection {
  id: string
  page_id: string
  page_name: string | null
  instagram_business_account_id: string
  instagram_username: string | null
  webhook_subscribed: boolean
  comment_automation_enabled: boolean
  created_at: string
  updated_at: string
}

const facebookLoading = ref(true)
const facebookConnectLoading = ref(false)
const facebookDisconnectLoading = ref(false)
const facebookConnections = ref<FacebookConnection[]>([])
const facebookError = ref('')

const facebookConnected = computed(() => facebookConnections.value.length > 0)

const whatsappLoading = ref(true)
const whatsappConnectLoading = ref(false)
const whatsappDisconnectLoading = ref(false)
const whatsappConnections = ref<WhatsAppConnection[]>([])
const whatsappError = ref('')

const whatsappConnected = computed(() => whatsappConnections.value.length > 0)

const instagramLoading = ref(true)
const instagramConnectLoading = ref(false)
const instagramDisconnectLoading = ref(false)
const instagramCommentToggleLoading = ref(false)
const instagramConnections = ref<InstagramConnection[]>([])
const instagramError = ref('')

const instagramConnected = computed(() => instagramConnections.value.length > 0)

const instagramCommentEnabled = computed(() =>
  instagramConnected.value
  && instagramConnections.value.every(connection => connection.comment_automation_enabled),
)

const facebookBanner = computed(() => {
  const status = route.query.facebook
  if (status === 'connected') {
    if (!facebookConnected.value) return ''
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

const whatsappBanner = computed(() => {
  const status = route.query.whatsapp
  if (status === 'connected') {
    if (!whatsappConnected.value) return ''
    const numbers = typeof route.query.numbers === 'string' ? route.query.numbers : ''
    return numbers
      ? `WhatsApp connected successfully: ${numbers}`
      : 'WhatsApp connected successfully.'
  }
  if (status === 'error') {
    const message = typeof route.query.message === 'string' ? route.query.message : 'Connection failed.'
    return `WhatsApp connection failed: ${message}`
  }
  return ''
})

const instagramBanner = computed(() => {
  const status = route.query.instagram
  if (status === 'connected') {
    if (!instagramConnected.value) return ''
    const accounts = typeof route.query.accounts === 'string' ? route.query.accounts : ''
    return accounts
      ? `Instagram connected successfully: ${accounts}`
      : 'Instagram connected successfully.'
  }
  if (status === 'error') {
    const message = typeof route.query.message === 'string' ? route.query.message : 'Connection failed.'
    return `Instagram connection failed: ${message}`
  }
  return ''
})

function clearInstagramOAuthQuery() {
  const query = { ...route.query }
  delete query.instagram
  delete query.accounts
  if (route.query.instagram) {
    delete query.message
  }
  router.replace({ path: route.path, query })
}

function clearFacebookOAuthQuery() {
  const query = { ...route.query }
  delete query.facebook
  delete query.pages
  if (route.query.facebook) {
    delete query.message
  }
  router.replace({ path: route.path, query })
}

function clearWhatsAppOAuthQuery() {
  const query = { ...route.query }
  delete query.whatsapp
  delete query.numbers
  if (route.query.whatsapp) {
    delete query.message
  }
  router.replace({ path: route.path, query })
}

function syncOAuthBannersWithConnectionState() {
  if (route.query.instagram === 'connected' && !instagramConnected.value) {
    clearInstagramOAuthQuery()
  }
  if (route.query.facebook === 'connected' && !facebookConnected.value) {
    clearFacebookOAuthQuery()
  }
  if (route.query.whatsapp === 'connected' && !whatsappConnected.value) {
    clearWhatsAppOAuthQuery()
  }
}

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
    clearFacebookOAuthQuery()
  }
  catch (error) {
    facebookError.value =
      error instanceof Error ? error.message : 'Unable to disconnect Facebook.'
  }
  finally {
    facebookDisconnectLoading.value = false
  }
}

async function loadInstagramStatus() {
  const accessToken = session.value?.access_token
  if (!accessToken) {
    instagramConnections.value = []
    instagramLoading.value = false
    return
  }

  instagramLoading.value = true
  instagramError.value = ''

  try {
    const response = await $fetch<{ connected: boolean, connections: InstagramConnection[] }>(
      `${config.public.apiBaseUrl}/auth/instagram/status`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    instagramConnections.value = response.connections ?? []
  }
  catch (error) {
    instagramError.value =
      error instanceof Error ? error.message : 'Unable to load Instagram connection status.'
    instagramConnections.value = []
  }
  finally {
    instagramLoading.value = false
  }
}

async function connectInstagram() {
  const accessToken = session.value?.access_token
  if (!accessToken || instagramConnectLoading.value) return

  instagramConnectLoading.value = true
  instagramError.value = ''

  try {
    const response = await $fetch<{ url: string }>(
      `${config.public.apiBaseUrl}/auth/instagram/connect`,
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
    instagramError.value = 'Instagram connect URL was not returned.'
  }
  catch (error) {
    instagramError.value =
      error instanceof Error ? error.message : 'Unable to start Instagram connection.'
  }
  finally {
    instagramConnectLoading.value = false
  }
}

async function disconnectInstagram() {
  const accessToken = session.value?.access_token
  if (!accessToken || instagramDisconnectLoading.value) return

  instagramDisconnectLoading.value = true
  instagramError.value = ''

  try {
    await $fetch(`${config.public.apiBaseUrl}/auth/instagram/disconnect`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    instagramConnections.value = []
    clearInstagramOAuthQuery()
  }
  catch (error) {
    instagramError.value =
      error instanceof Error ? error.message : 'Unable to disconnect Instagram.'
  }
  finally {
    instagramDisconnectLoading.value = false
  }
}

async function toggleInstagramCommentAutomation() {
  const accessToken = session.value?.access_token
  if (!accessToken || instagramCommentToggleLoading.value || !instagramConnected.value) return

  const enabled = !instagramCommentEnabled.value
  const previous = instagramConnections.value
  instagramCommentToggleLoading.value = true
  instagramError.value = ''
  instagramConnections.value = instagramConnections.value.map(connection => ({
    ...connection,
    comment_automation_enabled: enabled,
  }))

  try {
    const response = await $fetch<{ connections: InstagramConnection[] }>(
      `${config.public.apiBaseUrl}/auth/instagram/comment-automation`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: { enabled },
      },
    )
    if (response.connections) {
      instagramConnections.value = response.connections
    }
  }
  catch (error) {
    instagramConnections.value = previous
    instagramError.value =
      error instanceof Error ? error.message : 'Unable to update comment automation.'
  }
  finally {
    instagramCommentToggleLoading.value = false
  }
}

async function loadWhatsAppStatus() {
  const accessToken = session.value?.access_token
  if (!accessToken) {
    whatsappConnections.value = []
    whatsappLoading.value = false
    return
  }

  whatsappLoading.value = true
  whatsappError.value = ''

  try {
    const response = await $fetch<{ connected: boolean, connections: WhatsAppConnection[] }>(
      `${config.public.apiBaseUrl}/auth/whatsapp/status`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    whatsappConnections.value = response.connections ?? []
  }
  catch (error) {
    whatsappError.value =
      error instanceof Error ? error.message : 'Unable to load WhatsApp connection status.'
    whatsappConnections.value = []
  }
  finally {
    whatsappLoading.value = false
  }
}

async function connectWhatsApp() {
  const accessToken = session.value?.access_token
  if (!accessToken || whatsappConnectLoading.value) return

  whatsappConnectLoading.value = true
  whatsappError.value = ''

  try {
    const response = await $fetch<{ url: string }>(
      `${config.public.apiBaseUrl}/auth/whatsapp/connect`,
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
    whatsappError.value = 'WhatsApp connect URL was not returned.'
  }
  catch (error) {
    whatsappError.value =
      error instanceof Error ? error.message : 'Unable to start WhatsApp connection.'
  }
  finally {
    whatsappConnectLoading.value = false
  }
}

async function disconnectWhatsApp() {
  const accessToken = session.value?.access_token
  if (!accessToken || whatsappDisconnectLoading.value) return

  whatsappDisconnectLoading.value = true
  whatsappError.value = ''

  try {
    await $fetch(`${config.public.apiBaseUrl}/auth/whatsapp/disconnect`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    whatsappConnections.value = []
    clearWhatsAppOAuthQuery()
  }
  catch (error) {
    whatsappError.value =
      error instanceof Error ? error.message : 'Unable to disconnect WhatsApp.'
  }
  finally {
    whatsappDisconnectLoading.value = false
  }
}

async function loadConnectionStatuses() {
  await Promise.all([loadFacebookStatus(), loadWhatsAppStatus(), loadInstagramStatus()])
  syncOAuthBannersWithConnectionState()
}

onMounted(loadConnectionStatuses)
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

      <p
        v-if="whatsappBanner"
        class="mt-6 rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-ink"
      >
        {{ whatsappBanner }}
      </p>

      <p
        v-if="instagramBanner"
        class="mt-6 rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-ink"
      >
        {{ instagramBanner }}
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
          <p class="mt-4 text-sm leading-6 text-ink-muted">
            Connect your Instagram account once to enable both automations below. They share the same
            authentication and webhook.
          </p>

          <div class="mt-5 space-y-4">
            <div class="rounded-xl bg-white/80 p-4">
              <div class="flex items-start justify-between gap-3">
                <h3 class="text-sm font-semibold text-ink">
                  Feature 1: DM Question Flow
                </h3>
              </div>
              <p class="mt-2 text-sm leading-6 text-ink-muted">
                When someone sends a DM to your Instagram account, this feature automatically asks several questions.
              </p>
            </div>

            <div class="rounded-xl bg-white/80 p-4">
              <h3 class="text-sm font-semibold text-ink">
                Feature 2: Comment to DM
              </h3>
                <button
                  v-if="instagramConnected"
                  type="button"
                  role="switch"
                  :aria-checked="instagramCommentEnabled"
                  :disabled="instagramCommentToggleLoading"
                  class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition disabled:cursor-not-allowed disabled:opacity-60"
                  :class="instagramCommentEnabled ? 'bg-pink-600' : 'bg-gray-300'"
                  @click="toggleInstagramCommentAutomation"
                >
                  <span
                    class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition"
                    :class="instagramCommentEnabled ? 'translate-x-5' : 'translate-x-1'"
                  />
                </button>
              <p class="mt-2 text-sm leading-6 text-ink-muted">
                When someone comments on your Instagram post, this feature automatically replies to the comment and sends a private DM.
              </p>
              <p
                v-if="instagramConnected"
                class="mt-3 text-xs font-medium"
                :class="instagramCommentEnabled ? 'text-pink-700' : 'text-ink-muted'"
              >
                {{ instagramCommentToggleLoading
                  ? 'Updating...'
                  : instagramCommentEnabled
                    ? 'Comment automation is on'
                    : 'Comment automation is off' }}
              </p>
            </div>
          </div>
          <div
            v-if="instagramConnected"
            class="mt-4 rounded-xl border border-pink-200 bg-pink-50 px-4 py-3"
          >
            <p class="text-sm font-semibold text-pink-900">
              Connected
            </p>
            <ul class="mt-2 space-y-1 text-sm text-pink-800">
              <li
                v-for="connection in instagramConnections"
                :key="connection.id"
              >
                @{{ connection.instagram_username || connection.page_name || connection.instagram_business_account_id }}
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
            v-if="instagramError"
            class="mt-4 text-sm text-rose-600"
          >
            {{ instagramError }}
          </p>

          <button
            v-if="!instagramConnected"
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-pink-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="instagramLoading || instagramConnectLoading"
            @click="connectInstagram"
          >
            {{ instagramConnectLoading ? 'Redirecting to Meta...' : 'Connect Instagram' }}
          </button>

          <button
            v-else
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-pink-300 bg-white px-4 py-2.5 text-sm font-medium text-pink-700 transition hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="instagramDisconnectLoading"
            @click="disconnectInstagram"
          >
            {{ instagramDisconnectLoading ? 'Disconnecting...' : 'Disconnect Instagram' }}
          </button>
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

          <div
            v-if="whatsappConnected"
            class="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3"
          >
            <p class="text-sm font-semibold text-emerald-900">
              Connected
            </p>
            <ul class="mt-2 space-y-1 text-sm text-emerald-800">
              <li
                v-for="connection in whatsappConnections"
                :key="connection.id"
              >
                {{ connection.display_phone_number || connection.verified_name || connection.phone_number_id }}
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
            v-if="whatsappError"
            class="mt-4 text-sm text-rose-600"
          >
            {{ whatsappError }}
          </p>

          <button
            v-if="!whatsappConnected"
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="whatsappLoading || whatsappConnectLoading"
            @click="connectWhatsApp"
          >
            {{ whatsappConnectLoading ? 'Redirecting to Meta...' : 'connect for DM replies' }}
          </button>

          <button
            v-else
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-emerald-300 bg-white px-4 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="whatsappDisconnectLoading"
            @click="disconnectWhatsApp"
          >
            {{ whatsappDisconnectLoading ? 'Disconnecting...' : 'Disconnect WhatsApp' }}
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

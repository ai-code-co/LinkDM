<script setup lang="ts">
import { computed, ref } from 'vue'

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const route = useRoute()
const supabase = useSupabaseClient()

const LOGO_SRC = '/logo.png'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const banner = computed(() => {
  if (route.query.reset === 'ok') {
    return 'Your password was updated. You can log in now.'
  }
  if (route.query.error === 'session') {
    return 'Could not complete sign in. Try again or request a new link.'
  }
  return ''
})

async function onSubmit() {
  errorMsg.value = ''
  loading.value = true
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) {
      errorMsg.value = error.message
      return
    }
    const redirect =
      typeof route.query.redirect === 'string' && route.query.redirect.startsWith('/')
        ? route.query.redirect
        : '/'
    await navigateTo(redirect)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center px-4 py-12 sm:py-16"
  >
    <div
      class="w-full max-w-md border border-edge bg-surface p-8 shadow-sm sm:rounded-sm sm:p-10"
    >
      <NuxtLink to="/" class="inline-block">
        <img
          :src="LOGO_SRC"
          alt="Linkora"
          class="h-12 w-auto"
          width="170"
          height="48"
          loading="eager"
        />
      </NuxtLink>

      <p class="mt-6 text-base font-normal text-ink">
        Log in to get linking!
      </p>

      <p
        v-if="banner"
        class="mt-4 rounded border border-edge bg-canvas px-3 py-2 text-sm text-ink-muted"
      >
        {{ banner }}
      </p>

      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <div>
          <label for="login-email" class="block text-sm font-bold text-ink">
            Email
          </label>
          <input
            id="login-email"
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            required
            placeholder="Email"
            class="mt-2 w-full border border-input-edge bg-input-surface px-3 py-2.5 text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <div>
          <div class="flex items-baseline justify-between gap-2">
            <label for="login-password" class="text-sm font-bold text-ink">
              Password
            </label>
            <NuxtLink
              to="/forgot-password"
              class="text-sm text-ink-subtle underline decoration-edge-strong underline-offset-2 hover:text-ink-muted"
            >
              Forgot password?
            </NuxtLink>
          </div>
          <input
            id="login-password"
            v-model="password"
            type="password"
            name="password"
            autocomplete="current-password"
            required
            placeholder="Password"
            class="mt-2 w-full border border-input-edge bg-input-surface px-3 py-2.5 text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <p v-if="errorMsg" class="text-sm text-red-600 dark:text-red-400">
          {{ errorMsg }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="rounded-md bg-brand px-6 py-2.5 text-sm font-medium text-on-brand transition hover:bg-brand-hover disabled:opacity-60"
        >
          {{ loading ? 'Signing in…' : 'Log in' }}
        </button>
      </form>

      <p class="mt-8 text-sm text-ink-subtle">
        New user?
        <NuxtLink
          to="/signup"
          class="underline decoration-edge-strong underline-offset-2 hover:text-ink-muted"
        >
          Create a free Linkora account
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const supabase = useSupabaseClient()
const email = ref('')
const loading = ref(false)
const message = ref('')
const errorMsg = ref('')

async function onSubmit() {
  errorMsg.value = ''
  message.value = ''
  loading.value = true
  try {
    const requestURL = useRequestURL()
    const redirectTo = `${requestURL.origin}/reset-password`
    const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
      redirectTo,
    })
    if (error) {
      errorMsg.value = error.message
      return
    }
    message.value =
      'If an account exists for that email, you will receive a reset link shortly.'
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
      <h1 class="text-xl font-bold text-ink">
        Reset password
      </h1>
      <p class="mt-2 text-sm text-ink-muted">
        Enter your email and we will send you a link to choose a new password.
      </p>

      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <div>
          <label for="forgot-email" class="block text-sm font-bold text-ink">
            Email
          </label>
          <input
            id="forgot-email"
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            required
            class="mt-2 w-full border border-input-edge bg-input-surface px-3 py-2.5 text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <p v-if="errorMsg" class="text-sm text-red-600 dark:text-red-400">
          {{ errorMsg }}
        </p>
        <p v-if="message" class="text-sm text-ink-muted">
          {{ message }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="rounded-md bg-brand px-6 py-2.5 text-sm font-medium text-on-brand transition hover:bg-brand-hover disabled:opacity-60"
        >
          {{ loading ? 'Sending…' : 'Send reset link' }}
        </button>
      </form>

      <p class="mt-8 text-sm text-ink-subtle">
        <NuxtLink
          to="/login"
          class="underline decoration-edge-strong underline-offset-2 hover:text-ink-muted"
        >
          Back to log in
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

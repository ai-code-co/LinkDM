<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'auth',
})

const supabase = useSupabaseClient()
const password = ref('')
const password2 = ref('')
const loading = ref(false)
const errorMsg = ref('')
const ready = ref(false)

onMounted(async () => {
  await supabase.auth.getSession()
  ready.value = true
})

async function onSubmit() {
  errorMsg.value = ''
  if (password.value !== password2.value) {
    errorMsg.value = 'Passwords do not match.'
    return
  }
  if (password.value.length < 8) {
    errorMsg.value = 'Use at least 8 characters.'
    return
  }
  loading.value = true
  try {
    const { error } = await supabase.auth.updateUser({ password: password.value })
    if (error) {
      errorMsg.value = error.message
      return
    }
    await navigateTo('/login?reset=ok')
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
        Set new password
      </h1>
      <p class="mt-2 text-sm text-ink-muted">
        Choose a new password for your account.
      </p>

      <form v-if="ready" class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <div>
          <label for="reset-pass" class="block text-sm font-bold text-ink">
            New password
          </label>
          <input
            id="reset-pass"
            v-model="password"
            type="password"
            autocomplete="new-password"
            required
            minlength="8"
            class="mt-2 w-full border border-input-edge bg-input-surface px-3 py-2.5 text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label for="reset-pass2" class="block text-sm font-bold text-ink">
            Confirm password
          </label>
          <input
            id="reset-pass2"
            v-model="password2"
            type="password"
            autocomplete="new-password"
            required
            minlength="8"
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
          {{ loading ? 'Saving…' : 'Update password' }}
        </button>
      </form>
      <p v-else class="mt-8 text-sm text-ink-muted">
        Loading…
      </p>

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

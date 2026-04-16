<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const supabase = useSupabaseClient()

const LOGO_SRC =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64c9e53ac1a5c83f678f4d7f_f4297ba2479cee9fa3ad6a47401edfa5_linkdm.avif'

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'other', label: 'Other' },
]

const accountTypes = [
  { value: 'creator', label: 'Creator' },
  { value: 'business', label: 'Business' },
  { value: 'agency', label: 'Agency' },
  { value: 'other', label: 'Other' },
]

const inputClass =
  'mt-2 w-full rounded border border-input-edge bg-input-surface px-3 py-2 text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const businessName = ref('')
const country = ref('')
const accountType = ref('')
const password = ref('')
const termsAccepted = ref(false)

const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

async function onSubmit() {
  errorMsg.value = ''
  successMsg.value = ''
  if (!termsAccepted.value) {
    errorMsg.value = 'Please accept the terms to continue.'
    return
  }
  if (password.value.length < 8) {
    errorMsg.value = 'Password must be at least 8 characters.'
    return
  }

  loading.value = true
  try {
    const requestURL = useRequestURL()
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: `${requestURL.origin}/confirm`,
        data: {
          first_name: firstName.value.trim(),
          last_name: lastName.value.trim(),
          business_name: businessName.value.trim(),
          country: country.value,
          account_type: accountType.value,
        },
      },
    })
    if (error) {
      errorMsg.value = error.message
      return
    }
    if (data.session) {
      await navigateTo('/')
      return
    }
    successMsg.value =
      'Check your email to confirm your account, then you can log in.'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:py-16"
  >
    <div
      class="w-full max-w-xl rounded-lg border border-edge bg-surface p-8 shadow-md sm:p-10"
    >
      <NuxtLink to="/" class="inline-block">
        <img
          :src="LOGO_SRC"
          alt="LinkDM"
          class="h-9 w-auto"
          width="130"
          height="40"
          loading="eager"
        />
      </NuxtLink>

      <h1 class="mt-6 text-2xl font-bold text-ink">
        Create A Free LinkDM Account
      </h1>
      <p class="mt-3 text-center text-sm text-ink-subtle">
        Join LinkDM, the fastest growing Instagram DM Automation platform loved by
        thousands of creators!
      </p>

      <form class="mt-8 space-y-5" @submit.prevent="onSubmit">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="signup-first" class="block text-sm font-bold text-ink">
              First Name
            </label>
            <input
              id="signup-first"
              v-model="firstName"
              type="text"
              name="firstName"
              autocomplete="given-name"
              required
              placeholder="Enter your first name"
              :class="inputClass"
            />
          </div>
          <div>
            <label for="signup-last" class="block text-sm font-bold text-ink">
              Last Name
            </label>
            <input
              id="signup-last"
              v-model="lastName"
              type="text"
              name="lastName"
              autocomplete="family-name"
              required
              placeholder="Enter your last name"
              :class="inputClass"
            />
          </div>
        </div>

        <div>
          <label for="signup-email" class="block text-sm font-bold text-ink">
            Email
          </label>
          <input
            id="signup-email"
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            required
            placeholder="Enter your email address"
            :class="inputClass"
          />
        </div>

        <div>
          <label for="signup-business" class="block text-sm font-bold text-ink">
            Business or Creator Name
          </label>
          <input
            id="signup-business"
            v-model="businessName"
            type="text"
            name="businessName"
            autocomplete="organization"
            required
            placeholder="Enter a business name or creator name"
            :class="inputClass"
          />
        </div>

        <div>
          <label for="signup-country" class="block text-sm font-bold text-ink">
            Country
          </label>
          <select
            id="signup-country"
            v-model="country"
            name="country"
            required
            :class="inputClass"
          >
            <option value="" disabled>
              Select Country
            </option>
            <option v-for="c in countries" :key="c.value" :value="c.value">
              {{ c.label }}
            </option>
          </select>
        </div>

        <div>
          <label for="signup-account-type" class="block text-sm font-bold text-ink">
            Account Type
          </label>
          <select
            id="signup-account-type"
            v-model="accountType"
            name="accountType"
            required
            :class="inputClass"
          >
            <option value="" disabled>
              Select Account Type
            </option>
            <option v-for="t in accountTypes" :key="t.value" :value="t.value">
              {{ t.label }}
            </option>
          </select>
        </div>

        <div>
          <label for="signup-password" class="block text-sm font-bold text-ink">
            Password
          </label>
          <input
            id="signup-password"
            v-model="password"
            type="password"
            name="password"
            autocomplete="new-password"
            required
            minlength="8"
            placeholder="Enter password"
            :class="inputClass"
          />
        </div>

        <div class="flex gap-3 pt-1">
          <input
            id="signup-terms"
            v-model="termsAccepted"
            type="checkbox"
            name="terms"
            required
            class="mt-1 h-4 w-4 shrink-0 rounded border-input-edge text-brand focus:ring-brand"
          />
          <label for="signup-terms" class="text-sm text-ink-muted">
            I accept the
            <a href="#" class="text-link hover:underline">Terms &amp; Conditions</a>
            and
            <a href="#" class="text-link hover:underline">Privacy Policy</a>
          </label>
        </div>

        <p v-if="errorMsg" class="text-sm text-red-600 dark:text-red-400">
          {{ errorMsg }}
        </p>
        <p v-if="successMsg" class="text-sm text-ink-muted">
          {{ successMsg }}
        </p>

        <div class="flex justify-center pt-2">
          <button
            type="submit"
            :disabled="loading"
            class="rounded-md bg-brand px-8 py-2.5 text-sm font-bold text-on-brand transition hover:bg-brand-hover disabled:opacity-60"
          >
            {{ loading ? 'Creating account…' : 'Get Started' }}
          </button>
        </div>
      </form>
    </div>

    <p class="mt-8 text-center text-sm text-ink-subtle">
      Already using LinkDM?
      <NuxtLink
        to="/login"
        class="font-medium text-ink-muted underline decoration-edge-strong underline-offset-2 hover:text-ink"
      >
        Log in
      </NuxtLink>
    </p>
  </div>
</template>

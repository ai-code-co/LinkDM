<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

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
  'mt-2 w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 sm:py-16"
  >
    <div
      class="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-8 shadow-md sm:p-10"
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

      <h1 class="mt-6 text-2xl font-bold text-gray-900">
        Create A Free LinkDM Account
      </h1>
      <p class="mt-3 text-center text-sm text-gray-500">
        Join LinkDM, the fastest growing Instagram DM Automation platform loved by
        thousands of creators!
      </p>

      <form class="mt-8 space-y-5" @submit.prevent>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="signup-first" class="block text-sm font-bold text-gray-900">
              First Name
            </label>
            <input
              id="signup-first"
              type="text"
              name="firstName"
              autocomplete="given-name"
              placeholder="Enter your first name"
              :class="inputClass"
            />
          </div>
          <div>
            <label for="signup-last" class="block text-sm font-bold text-gray-900">
              Last Name
            </label>
            <input
              id="signup-last"
              type="text"
              name="lastName"
              autocomplete="family-name"
              placeholder="Enter your last name"
              :class="inputClass"
            />
          </div>
        </div>

        <div>
          <label for="signup-email" class="block text-sm font-bold text-gray-900">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Enter your email address"
            :class="inputClass"
          />
        </div>

        <div>
          <label for="signup-business" class="block text-sm font-bold text-gray-900">
            Business or Creator Name
          </label>
          <input
            id="signup-business"
            type="text"
            name="businessName"
            autocomplete="organization"
            placeholder="Enter a business name or creator name"
            :class="inputClass"
          />
        </div>

        <div>
          <label for="signup-country" class="block text-sm font-bold text-gray-900">
            Country
          </label>
          <select
            id="signup-country"
            name="country"
            required
            :class="inputClass"
          >
            <option value="" disabled selected>
              Select Country
            </option>
            <option v-for="c in countries" :key="c.value" :value="c.value">
              {{ c.label }}
            </option>
          </select>
        </div>

        <div>
          <label for="signup-account-type" class="block text-sm font-bold text-gray-900">
            Account Type
          </label>
          <select
            id="signup-account-type"
            name="accountType"
            required
            :class="inputClass"
          >
            <option value="" disabled selected>
              Select Account Type
            </option>
            <option v-for="t in accountTypes" :key="t.value" :value="t.value">
              {{ t.label }}
            </option>
          </select>
        </div>

        <div>
          <label for="signup-password" class="block text-sm font-bold text-gray-900">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            name="password"
            autocomplete="new-password"
            placeholder="Enter password"
            :class="inputClass"
          />
        </div>

        <div class="flex gap-3 pt-1">
          <input
            id="signup-terms"
            type="checkbox"
            name="terms"
            required
            class="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label for="signup-terms" class="text-sm text-gray-700">
            I accept the
            <a href="#" class="text-blue-600 hover:underline">Terms &amp; Conditions</a>
            and
            <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
          </label>
        </div>

        <div class="flex justify-center pt-2">
          <button
            type="submit"
            class="rounded-md bg-blue-600 px-8 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>

    <p class="mt-8 text-center text-sm text-gray-500">
      Already using LinkDM?
      <NuxtLink
        to="/login"
        class="font-medium text-gray-700 underline decoration-gray-400 underline-offset-2 hover:text-gray-900"
      >
        Log in
      </NuxtLink>
    </p>
  </div>
</template>

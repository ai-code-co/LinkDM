<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const LOGO_SRC =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64c9e53ac1a5c83f678f4d7f_f4297ba2479cee9fa3ad6a47401edfa5_linkdm.avif'
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:py-16"
  >
    <div
      class="w-full max-w-md border border-gray-200 bg-white p-8 shadow-sm sm:p-10 sm:rounded-sm"
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

      <p class="mt-6 text-base font-normal text-gray-900">
        Log in to get linking!
      </p>

      <form class="mt-8 space-y-6" @submit.prevent>
        <div>
          <label for="login-email" class="block text-sm font-bold text-gray-900">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Email"
            class="mt-2 w-full border border-gray-300 px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <div class="flex items-baseline justify-between gap-2">
            <label for="login-password" class="text-sm font-bold text-gray-900">
              Password
            </label>
            <a
              href="#"
              class="text-sm text-gray-500 underline decoration-gray-400 underline-offset-2 hover:text-gray-700"
            >
              Forgot password?
            </a>
          </div>
          <input
            id="login-password"
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Password"
            class="mt-2 w-full border border-gray-300 px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Log in
        </button>
      </form>

      <p class="mt-8 text-sm text-gray-500">
        New user?
        <NuxtLink
          to="/signup"
          class="underline decoration-gray-400 underline-offset-2 hover:text-gray-700"
        >
          Create a free LinkDM account
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

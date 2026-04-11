<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const LOGO_SRC =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64c9e53ac1a5c83f678f4d7f_f4297ba2479cee9fa3ad6a47401edfa5_linkdm.avif'

const route = useRoute()
const isProPage = computed(() => route.path === '/pro')

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white shadow-sm"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4"
    >
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-2"
        @click="closeMenu"
      >
        <img
          :src="LOGO_SRC"
          alt="LinkDM"
          class="h-8 w-auto sm:h-9"
          width="120"
          height="36"
          loading="eager"
        />
      </NuxtLink>

      <nav
        class="hidden items-center gap-6 text-sm font-medium text-gray-900 md:flex lg:gap-8"
        aria-label="Main"
      >
        <NuxtLink
          v-if="isProPage"
          to="/"
          class="inline-flex items-center gap-1.5 text-gray-900 transition-colors hover:text-gray-600"
        >
          Home
        </NuxtLink>
        <NuxtLink
          v-else
          to="/pro"
          class="group inline-flex items-center gap-1.5"
        >
          <span class="font-bold text-black transition-colors group-hover:text-gray-600">LinkDM</span>
          <span
            class="rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white"
          >
            Pro
          </span>
        </NuxtLink>
        <a href="#" class="text-gray-900 transition-colors hover:text-gray-600">Support</a>
        <a href="#" class="text-gray-900 transition-colors hover:text-gray-600">Blog</a>
        <NuxtLink
          to="/pricing"
          class="text-gray-900 transition-colors hover:text-gray-600"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="rounded-md bg-gray-100 px-4 py-2 font-medium text-gray-900 transition hover:bg-gray-200"
        >
          Log in
        </NuxtLink>
        <NuxtLink
          to="/signup"
          class="rounded-md bg-[#1487fa] px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          Create Free Account
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Open menu</span>
        <svg
          v-if="!menuOpen"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div
      v-show="menuOpen"
      id="mobile-nav"
      class="border-t border-gray-100 px-4 py-4 md:hidden"
    >
      <nav class="flex flex-col gap-3 text-sm font-medium text-gray-900" aria-label="Mobile">
        <NuxtLink
          v-if="isProPage"
          to="/"
          class="inline-flex items-center gap-2 py-1 transition-colors hover:text-gray-600"
          @click="closeMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          v-else
          to="/pro"
          class="group inline-flex items-center gap-2 py-1"
          @click="closeMenu"
        >
          <span class="font-bold text-black transition-colors group-hover:text-gray-600">LinkDM</span>
          <span
            class="rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-semibold text-white"
          >
            Pro
          </span>
        </NuxtLink>
        <a href="#" class="py-1 transition-colors hover:text-gray-600" @click="closeMenu">Support</a>
        <a href="#" class="py-1 transition-colors hover:text-gray-600" @click="closeMenu">Blog</a>
        <NuxtLink
          to="/pricing"
          class="py-1 transition-colors hover:text-gray-600"
          @click="closeMenu"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="mt-1 rounded-md bg-gray-100 px-4 py-2.5 text-center"
          @click="closeMenu"
        >
          Log in
        </NuxtLink>
        <NuxtLink
          to="/signup"
          class="rounded-md bg-blue-600 px-4 py-2.5 text-center text-white"
          @click="closeMenu"
        >
          Create Free Account
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

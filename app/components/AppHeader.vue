<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const LOGO_SRC = '/logo.png'

const route = useRoute()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const isProPage = computed(() => route.path === '/pro')
const accountName = computed(() => {
  const claims = user.value as {
    email?: string
    user_metadata?: { first_name?: string }
  } | null
  const firstName = claims?.user_metadata?.first_name?.trim()
  if (firstName) return firstName
  if (claims?.email) return claims.email.split('@')[0]
  return ''
})

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

async function logout() {
  closeMenu()
  await supabase.auth.signOut()
  await navigateTo('/')
}

const navLinkClass = 'text-ink transition-colors hover:text-ink-muted'
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-nav-edge bg-nav-surface shadow-sm transition-colors duration-200"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2.5 sm:px-8 sm:py-4">
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-2"
        @click="closeMenu"
      >
        <img
          :src="LOGO_SRC"
          alt="Linkora"
          class="h-10 w-auto sm:h-11"
          width="156"
          height="44"
          loading="eager"
        />
      </NuxtLink>

      <nav
        class="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8"
        aria-label="Main"
      >
        <NuxtLink
          v-if="isProPage"
          to="/"
          :class="navLinkClass"
          class="inline-flex items-center gap-1.5"
        >
          Home
        </NuxtLink>
        <NuxtLink
          v-else
          to="/pro"
          class="group inline-flex items-center gap-1.5"
        >
          <span class="font-bold text-ink transition-colors group-hover:text-ink-muted">Linkora</span>
          <span
            class="rounded bg-pro-amber px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white"
          >
            Pro
          </span>
        </NuxtLink>
        <a href="#" :class="navLinkClass">Support</a>
        <a href="#" :class="navLinkClass">Blog</a>
        <NuxtLink to="/pricing" :class="navLinkClass">
          Pricing
        </NuxtLink>
        <NuxtLink v-if="accountName" to="/features" :class="navLinkClass">
          Features
        </NuxtLink>
        <NuxtLink v-if="accountName" to="/settings" :class="navLinkClass">
          Settings
        </NuxtLink>
        <span
          v-if="accountName"
          class="inline-flex max-w-[180px] items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
          :title="accountName"
        >
          <svg
            class="h-3.5 w-3.5 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-7 15a7 7 0 1 1 14 0H3Z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="truncate">{{ accountName }}</span>
        </span>
        <template v-if="accountName">
          <button
            type="button"
            class="rounded-md bg-btn-muted px-4 py-2 font-medium text-ink transition hover:bg-btn-muted-hover"
            @click="logout"
          >
            Log out
          </button>
        </template>
        <template v-else>
          <NuxtLink
            to="/login"
            class="rounded-md bg-btn-muted px-4 py-2 font-medium text-ink transition hover:bg-btn-muted-hover"
          >
            Log in
          </NuxtLink>
          <NuxtLink
            to="/signup"
            class="rounded-md bg-brand px-4 py-2 font-medium text-on-brand shadow-sm transition hover:bg-brand-hover"
          >
            Create Free Account
          </NuxtLink>
        </template>
      </nav>

      <div class="flex items-center gap-2 md:hidden">
        <NuxtLink
          v-if="!accountName"
          to="/login"
          class="rounded-md bg-btn-muted px-3 py-1.5 text-sm font-semibold text-ink"
          @click="closeMenu"
        >
          Log in
        </NuxtLink>
        <button
          v-else
          type="button"
          class="rounded-md bg-btn-muted px-3 py-1.5 text-sm font-semibold text-ink"
          @click="logout"
        >
          Log out
        </button>
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand text-on-brand shadow-sm"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">Open menu</span>
          <svg
            v-if="!menuOpen"
            class="h-5 w-5"
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
            class="h-5 w-5"
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
    </div>

    <div
      v-show="menuOpen"
      id="mobile-nav"
      class="border-t border-nav-edge bg-nav-surface px-4 py-4 md:hidden"
    >
      <nav class="flex flex-col gap-3 text-sm font-medium text-ink" aria-label="Mobile">
        <NuxtLink
          v-if="isProPage"
          to="/"
          class="inline-flex items-center gap-2 py-1 transition-colors hover:text-ink-muted"
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
          <span class="font-bold text-ink transition-colors group-hover:text-ink-muted">Linkora</span>
          <span
            class="rounded bg-pro-amber px-1.5 py-0.5 text-[10px] font-semibold text-white"
          >
            Pro
          </span>
        </NuxtLink>
        <a href="#" class="py-1 transition-colors hover:text-ink-muted" @click="closeMenu">Support</a>
        <a href="#" class="py-1 transition-colors hover:text-ink-muted" @click="closeMenu">Blog</a>
        <NuxtLink
          to="/pricing"
          class="py-1 transition-colors hover:text-ink-muted"
          @click="closeMenu"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          v-if="accountName"
          to="/features"
          class="py-1 transition-colors hover:text-ink-muted"
          @click="closeMenu"
        >
          Features
        </NuxtLink>
        <NuxtLink
          v-if="accountName"
          to="/settings"
          class="py-1 transition-colors hover:text-ink-muted"
          @click="closeMenu"
        >
          Settings
        </NuxtLink>
        <template v-if="!accountName">
          <NuxtLink
            to="/login"
            class="mt-1 rounded-md bg-btn-muted px-4 py-2.5 text-center text-ink"
            @click="closeMenu"
          >
            Log in
          </NuxtLink>
          <NuxtLink
            to="/signup"
            class="rounded-md bg-brand px-4 py-2.5 text-center text-on-brand"
            @click="closeMenu"
          >
            Create Free Account
          </NuxtLink>
        </template>
        <p
          v-else
          class="inline-flex max-w-[190px] items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
          :title="accountName"
        >
          <svg
            class="h-3.5 w-3.5 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-7 15a7 7 0 1 1 14 0H3Z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="truncate">{{ accountName }}</span>
        </p>
      </nav>
    </div>
  </header>
</template>

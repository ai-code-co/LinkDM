<script setup lang="ts">
import { computed } from 'vue'

definePageMeta({
  middleware: 'auth',
})

const { theme, setTheme, THEMES } = useTheme()

const current = computed(() => theme.value)

function isSelected(id: (typeof THEMES)[number]['id']) {
  return current.value === id
}

async function selectTheme(id: (typeof THEMES)[number]['id']) {
  await setTheme(id, { syncProfile: true })
}
</script>

<template>
  <div class="bg-canvas pb-12 pt-8 sm:pb-14 sm:pt-10">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-eyebrow">
        Preferences
      </p>
      <h1 class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
        Appearance
      </h1>
      <p class="mt-2.5 max-w-2xl text-sm text-ink-muted sm:text-base">
        Choose a color theme for LinkDM. Your choice is saved to your account and synced across devices.
      </p>

      <div
        class="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4"
        role="radiogroup"
        aria-label="Site color theme"
      >
        <button
          v-for="item in THEMES"
          :key="item.id"
          type="button"
          role="radio"
          :aria-checked="isSelected(item.id)"
          class="group relative flex flex-col rounded-2xl border-2 p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:p-5"
          :class="
            isSelected(item.id)
              ? 'border-brand bg-surface shadow-md'
              : 'border-edge bg-surface hover:border-edge-strong'
          "
          @click="selectTheme(item.id)"
        >
          <span
            v-if="isSelected(item.id)"
            class="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-on-brand sm:right-4 sm:top-4 sm:h-6 sm:w-6"
            aria-hidden="true"
          >
            <svg class="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>

          <div
            class="mb-3 overflow-hidden rounded-xl border border-edge sm:mb-4"
            aria-hidden="true"
          >
            <div
              class="flex h-12 items-center gap-2 border-b border-edge px-2.5 sm:h-14 sm:px-3"
              :class="item.scheme === 'dark' ? 'bg-zinc-900' : 'bg-white'"
            >
              <span
                class="h-2 w-2 rounded-full"
                :class="item.scheme === 'dark' ? 'bg-zinc-600' : 'bg-zinc-300'"
              />
              <span
                class="h-2 w-14 rounded-full sm:w-16"
                :class="item.scheme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-200'"
              />
              <span
                class="ml-auto h-5 w-12 rounded-md sm:h-6 sm:w-14"
                :class="item.scheme === 'dark' ? 'bg-sky-500' : 'bg-[#1487fa]'"
              />
            </div>
            <div
              class="h-14 px-2.5 py-2 sm:h-16 sm:px-3"
              :class="item.scheme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'"
            >
              <div
                class="h-2 max-w-[180px] rounded w-[72%]"
                :class="item.scheme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-300'"
              />
              <div
                class="mt-2 h-2 max-w-[120px] rounded w-[48%]"
                :class="item.scheme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'"
              />
            </div>
          </div>

          <span class="text-[11px] font-semibold uppercase tracking-wide text-ink-subtle sm:text-xs">
            {{ item.scheme === 'dark' ? 'Dark' : 'Light' }}
          </span>
          <span class="mt-1 text-base font-bold text-ink sm:text-lg">{{ item.name }}</span>
          <span class="mt-1.5 text-xs leading-relaxed text-ink-muted sm:mt-2 sm:text-sm">{{ item.description }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

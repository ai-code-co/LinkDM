<script setup lang="ts">
import { computed } from 'vue'

const user = useSupabaseUser()
const isLoggedIn = computed(() => Boolean(user.value))

const props = withDefaults(
  defineProps<{
    variant?: 'home' | 'pricing'
  }>(),
  { variant: 'home' },
)

const sectionClass = computed(() =>
  props.variant === 'pricing'
    ? 'py-10 sm:py-12'
    : 'py-16 sm:py-20 lg:py-24',
)

const btnClass = computed(() =>
  props.variant === 'pricing'
    ? 'inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-3 text-sm font-bold text-on-brand transition hover:bg-btn-dark-hover hover:text-on-brand sm:px-10 sm:text-base'
    : 'inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-10 py-4 text-base font-bold text-on-brand transition hover:bg-btn-dark-hover hover:text-on-brand sm:px-12 sm:py-[1.125rem] sm:text-lg',
)
</script>

<template>
  <section
    v-if="!isLoggedIn"
    :class="sectionClass"
  >
    <div class="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <template v-if="props.variant === 'home'">
        <h2
          class="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-snug"
        >
          <span class="block">Just like Instagram...</span>
          <span class="block">Linkora is free to use!</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base font-normal text-ink sm:text-lg">
          Join thousands of creators &amp; get started with your free Linkora account today!
        </p>
        <NuxtLink v-if="!isLoggedIn" to="/signup" class="mt-12" :class="btnClass">
          <span aria-hidden="true">👉</span>
          <span>Create your Free Account</span>
        </NuxtLink>
      </template>

      <template v-else>
        <h2 class="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
          🚀 Get started with Linkora for free, in seconds!
        </h2>
        <p class="mt-4 text-base text-ink-muted sm:text-lg">
          Join over <span class="font-bold text-ink">48,000+</span> creators using Linkora daily
        </p>
        <NuxtLink v-if="!isLoggedIn" to="/signup" class="mt-6 sm:mt-7" :class="btnClass">
          <span aria-hidden="true">👉</span>
          <span>Create your Free Account</span>
        </NuxtLink>
      </template>
    </div>
  </section>
</template>

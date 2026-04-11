<script setup lang="ts">
withDefaults(
  defineProps<{
   
    variant?: 'home' | 'pricing'
  }>(),
  { variant: 'home' },
)

const btnClass =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-[#1487fa] px-10 py-4 text-base font-bold text-white transition hover:bg-black sm:px-12 sm:py-[1.125rem] sm:text-lg'
</script>

<template>
  <section
    class="py-16 sm:py-20"
    :class="variant === 'pricing' ? '' : ' lg:py-24'"
  >
    <div class="mx-auto max-w-3xl px-4 text-center sm:px-8">
      <template v-if="variant === 'home'">
        <h2
          class="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem] lg:leading-snug"
        >
          <span class="block">Just like Instagram...</span>
          <span class="block">LinkDM is free to use!</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base font-normal text-gray-900 sm:text-lg">
          Join thousands of creators &amp; get started with your free LinkDM account today!
        </p>
        <NuxtLink to="/signup" class="mt-12" :class="btnClass">
          <span aria-hidden="true">👉</span>
          <span>Create your Free Account</span>
        </NuxtLink>
      </template>

      <template v-else>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
          🚀 Get started with LinkDM for free, in seconds!
        </h2>
        <p class="mt-4 text-base text-gray-600 sm:text-lg">
          Join over <span class="font-bold text-gray-900">48,000+</span> creators using LinkDM daily
        </p>
        <NuxtLink to="/signup" class="mt-8" :class="btnClass">
          <span aria-hidden="true">👉</span>
          <span>Create your Free Account</span>
        </NuxtLink>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const heroImages = [
  '/heroa.png',
  '/herob.png',
  '/heroc.png',
  '/herod.png',
] as const

const heroImageIndex = ref(0)

let heroImageTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  heroImageTimer = setInterval(() => {
    heroImageIndex.value = (heroImageIndex.value + 1) % heroImages.length
  }, 3000)
})

onUnmounted(() => {
  if (heroImageTimer) clearInterval(heroImageTimer)
})

const META_BADGE =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64c9e5dbade725a68deef3e2_de943708dbf9b766220812ef1b427575_mbp_logo.avif'
</script>

<template>
  <section class="bg-canvas">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div class="max-w-xl lg:max-w-none">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xl font-bold tracking-tight text-ink sm:text-2xl lg:text-3xl">Linkora</span>
            <span
              class="rounded-md bg-pro-cta px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-pro-cta-text sm:px-2.5 sm:text-xs"
            >
              Pro
            </span>
          </div>

          <h1
            class="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:mt-5 lg:text-[2.5rem] lg:leading-tight"
          >
            Power Tools for Instagram Creators
          </h1>
          <p class="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base lg:text-lg">
            Enhance your Linkora experience with access to Pro features, priority support and send up
            to 25,000 DMs per month!
          </p>

          <NuxtLink
            to="/signup"
            class="mt-6 inline-block rounded-lg bg-pro-cta px-5 py-2.5 text-sm font-bold text-pro-cta-text shadow-sm transition hover:bg-btn-dark-hover hover:text-on-brand sm:px-6 sm:py-3 sm:text-base"
          >
            Upgrade to Linkora Pro
          </NuxtLink>
          <p class="mt-2 text-xs text-ink-muted sm:text-sm">No credit card required</p>

          <div
            class="mt-4 inline-block rounded-lg bg-surface py-3 pl-0 pr-3 sm:py-4 sm:pr-4"
          >
            <img
              :src="META_BADGE"
              alt="Meta Business Partner"
              class="h-14 w-auto sm:h-16 md:h-20"
              width="280"
              height="78"
              loading="lazy"
            />
          </div>
        </div>

        <div
          class="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-lg"
          aria-live="polite"
        >
          <div class="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Transition name="hero-fade" mode="out-in">
              <img
                :key="heroImageIndex"
                :src="heroImages[heroImageIndex]"
                alt="Linkora Pro — comment to DM product example"
                class="h-full w-full object-contain"
                width="600"
                height="600"
                loading="eager"
                decoding="async"
              />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.1s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>

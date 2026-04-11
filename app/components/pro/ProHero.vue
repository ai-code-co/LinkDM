<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const heroImages = [
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/66804502db07272fcbbec138_dfc58951fc0b9ceeac9b3b05b902f114_the_broadmoor_house.avif',
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/66804502ded09e104d3cc016_15a0ab68a54e556f97c9c12efd8d2c1d_shopcasitablanca.avif',
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/6604eabd9660b46d149f6c47_7d0910821a28a39afbf5c42a24911ef7_slide1.avif',
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/6606241338e757dde9c2b8c2_832f38d7695d3b5ccbc5bd6f440b8af8_slide4.avif',
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
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
      <div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <div class="max-w-xl lg:max-w-none">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">LinkDM</span>
            <span
              class="rounded-md bg-[#F4B459] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white sm:text-sm"
            >
              Pro
            </span>
          </div>

          <h1
            class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Power Tools for Instagram Creators
          </h1>
          <p class="mt-4 text-base leading-relaxed text-gray-800 sm:text-lg">
            Enhance your LinkDM experience with access to Pro features, priority support and send up
            to 25,000 DMs per month!
          </p>

          <NuxtLink
            to="/signup"
            class="mt-8 inline-block rounded-lg bg-[#F4B459] px-6 py-3 text-base font-bold text-gray-900 shadow-sm transition hover:bg-black hover:text-white"
          >
            Upgrade to LinkDM Pro
          </NuxtLink>
          <p class="mt-2 text-sm text-gray-600">No credit card required</p>

          <div
            class="mt-4 inline-block rounded-lg bg-white py-4 pl-0 pr-4 sm:py-5 sm:pr-5"
          >
            <img
              :src="META_BADGE"
              alt="Meta Business Partner"
              class="h-16 w-auto sm:h-20 md:h-24"
              width="280"
              height="78"
              loading="lazy"
            />
          </div>
        </div>

        <div
          class="mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto"
          aria-live="polite"
        >
          <div class="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Transition name="hero-fade" mode="out-in">
              <img
                :key="heroImageIndex"
                :src="heroImages[heroImageIndex]"
                alt="LinkDM Pro — comment to DM product example"
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

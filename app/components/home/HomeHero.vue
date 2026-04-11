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

const stats = [
  {
    key: 'users',
    value: '48,000+',
    label: 'Happy LinkDM Users',
    stars: true as const,
  },
  {
    key: 'dms',
    value: '350 Million+',
    label: "Instagram DM's Sent",
    iconSrc:
      'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64d723df04a893ff7e2b3586_dd9097788ec9261a85f80c0010571044_inbox.avif',
  },
  {
    key: 'clicks',
    value: '30 Million',
    label: 'Link Clicks Monthly',
    iconSrc:
      'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64d723ded7c1e698e059d241_ba827b53c64fadb097f1612ad5cc1cea_computer-mouse.avif',
  },
  {
    key: 'comments',
    value: '20 Million',
    label: 'Comments Sent Monthly',
    iconSrc:
      'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/6530c9f7d96e15a8a2f8055d_99472e5c24df5fb055f82587ae98d541_chat-bubble.avif',
  },
]
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
      <div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        
        <div class="max-w-xl lg:max-w-none">
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Reply to Instagram Comments with a DM, Instantly!
          </h1>
          <p class="mt-3 text-lg font-medium text-[#1487fa] sm:text-xl">
            The #1 AutoDM Platform for Creators
          </p>

          <ul class="mt-6 space-y-3 text-base text-gray-800">
            <li class="flex gap-3">
              <span class="shrink-0" aria-hidden="true">✅</span>
              <span>Meta Business Partner</span>
            </li>
            <li class="flex gap-3">
              <span class="shrink-0 text-blue-600" aria-hidden="true">📘</span>
              <span>Works with Facebook</span>
            </li>
            <li class="flex gap-3">
              <span class="shrink-0" aria-hidden="true">🎉</span>
              <span>Used by 48,000+ creators, brands and agencies!</span>
            </li>
            <li class="flex gap-3">
              <span class="shrink-0" aria-hidden="true">💯 </span>
              <span>Get started in seconds</span>
            </li>
          </ul>

          <NuxtLink
            to="/signup"
            class="mt-8 inline-block rounded-lg bg-[#1487fa] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Create Account — It&apos;s Free!
          </NuxtLink>
          <p class="mt-2 text-sm text-gray-500">No credit card required</p>

          <div
            class="inline-block rounded-lg bg-white py-4 pl-0 pr-4 sm:py-5 sm:pr-5"
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
                alt="LinkDM — creators using automated Instagram DMs"
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

   
      <div
        class="mt-4 grid grid-cols-2 gap-8  pt-12 lg:mt-8 lg:grid-cols-4 lg:gap-6"
      >
        <div
          v-for="item in stats"
          :key="item.key"
          class="text-center"
        >
          <div
            v-if="item.stars"
            class="mb-2 flex justify-center gap-0.5 text-amber-400"
            aria-hidden="true"
          >
            <span v-for="s in 5" :key="s" class="text-lg leading-none">★</span>
          </div>
          <div v-else-if="item.iconSrc" class="mb-2 flex justify-center">
            <img
              :src="item.iconSrc"
              alt=""
              class="h-8 w-8 object-contain"
              width="32"
              height="32"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p class="text-2xl font-bold text-gray-900 sm:text-3xl">{{ item.value }}</p>
          <p class="mt-1 text-sm text-gray-600">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.10s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>

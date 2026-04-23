<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const user = useSupabaseUser()
const isLoggedIn = computed(() => Boolean(user.value))

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

const stats = [
  {
    key: 'users',
    value: '48,000+',
    label: 'Happy Linkora Users',
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
  <section class="bg-canvas">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:py-16">
      <div class="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div class="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h1
            class="text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-4xl sm:leading-tight lg:text-[2.75rem]"
          >
            Reply to Instagram Comments with a DM, Instantly!
          </h1>
          <p class="mt-3 text-xl font-semibold text-brand sm:text-xl">
            The #1 AutoDM Platform for Creators
          </p>

          <div
            class="mx-auto mt-5 w-full max-w-md lg:hidden"
            aria-live="polite"
          >
            <div class="relative aspect-square w-full overflow-hidden">
              <Transition name="hero-fade" mode="out-in">
                <img
                  :key="heroImageIndex"
                  :src="heroImages[heroImageIndex]"
                  alt="Linkora — creators using automated Instagram DMs"
                  class="h-full w-full object-contain"
                  width="600"
                  height="600"
                  loading="eager"
                  decoding="async"
                />
              </Transition>
            </div>
          </div>

          <ul class="mx-auto mt-5 max-w-sm space-y-2.5 text-center text-[1.125rem] text-ink-secondary lg:mx-0 lg:mt-6 lg:max-w-none lg:space-y-3 lg:text-left lg:text-base">
            <li class="flex justify-center gap-3 lg:justify-start">
              <span class="shrink-0" aria-hidden="true">✅</span>
              <span>Meta Business Partner</span>
            </li>
            <li class="flex justify-center gap-3 lg:justify-start">
              <span class="shrink-0 text-link" aria-hidden="true">📘</span>
              <span>Works with Facebook</span>
            </li>
            <li class="flex justify-center gap-3 lg:justify-start">
              <span class="shrink-0" aria-hidden="true">🎉</span>
              <span>Used by 48,000+ creators, brands and agencies!</span>
            </li>
            <li class="flex justify-center gap-3 lg:justify-start">
              <span class="shrink-0" aria-hidden="true">💯 </span>
              <span>Get started in seconds</span>
            </li>
          </ul>

          <template v-if="!isLoggedIn">
            <NuxtLink
              to="/signup"
              class="mt-6 inline-block w-full max-w-sm rounded-lg bg-brand px-6 py-3 text-center text-xl font-bold text-on-brand shadow-sm transition hover:bg-brand-hover lg:mt-8 lg:w-auto lg:max-w-none lg:text-base lg:font-semibold"
            >
              Create Account — It&apos;s Free!
            </NuxtLink>
            <p class="mt-2 text-center text-sm text-ink-subtle lg:text-left">No credit card required</p>
          </template>

          <div
            class="inline-block rounded-lg bg-surface py-4 pl-0 pr-4 sm:py-5 sm:pr-5"
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
          class="mx-auto hidden w-full max-w-lg lg:mx-0 lg:ml-auto lg:block"
          aria-live="polite"
        >
          <div class="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Transition name="hero-fade" mode="out-in">
              <img
                :key="heroImageIndex"
                :src="heroImages[heroImageIndex]"
                alt="Linkora — creators using automated Instagram DMs"
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
        class="mt-4 grid grid-cols-2 gap-8 pt-12 lg:mt-8 lg:grid-cols-4 lg:gap-6"
      >
        <div
          v-for="item in stats"
          :key="item.key"
          class="text-center"
        >
          <div
            v-if="item.stars"
            class="mb-2 flex justify-center gap-0.5 text-pro-amber"
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
          <p class="text-2xl font-bold text-ink sm:text-3xl">{{ item.value }}</p>
          <p class="mt-1 text-sm text-ink-muted">{{ item.label }}</p>
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

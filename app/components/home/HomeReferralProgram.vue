<script setup lang="ts">
const REFERRAL_IMAGE =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/67daa7467f269b6954fadc3b_linkdm_referral_box.avif'

const LEARN_MORE_URL = 'https://Linkora.com'
const FAQ_URL = 'https://Linkora.com'

const howItWorks = [
  'Share your unique referral link',
  "Earn 30% commission on every referral's subscription",
  'Get paid monthly',
]
</script>

<template>
  <section class="bg-canvas py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-center text-xs font-bold uppercase tracking-wider text-eyebrow">
        Earn with Linkora
      </p>
      <h2 class="mt-3 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Linkora Referral Program
      </h2>
      <p class="mx-auto mt-4 text-center text-base leading-relaxed text-ink-muted">
        Refer your friends to Linkora and earn 30% of the total revenue they spend on a paid
        subscription during their first year. It&apos;s our way of rewarding our most engaged users
        for helping to grow the community and share the value of our platform.
      </p>

      <div class="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div class="flex justify-center lg:justify-start">
          <img
            :src="REFERRAL_IMAGE"
            alt="LinkDM referral dashboard with referral link and quick stats"
            class="block w-full max-w-md border-0 lg:max-w-lg"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="max-w-xl lg:max-w-none">
          <h3 class="text-xl font-bold text-ink">How It Works</h3>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-base text-ink-muted">
            <li v-for="(item, i) in howItWorks" :key="i">
              {{ item }}
            </li>
          </ul>

          <h3 class="mt-8 text-xl font-bold text-ink">Exclusive Access</h3>
          <p class="mt-3 text-base text-ink-muted">
            This program is available to Linkora Pro users
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="LEARN_MORE_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand shadow-sm transition hover:bg-btn-dark-hover hover:text-on-brand"
            >
              Learn more
            </a>
            <a
              :href="FAQ_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex rounded-lg bg-btn-muted px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-btn-muted-hover"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

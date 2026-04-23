<script setup lang="ts">
const PARTNER_IMAGE =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/682b3e1feb29a267810885fd_partnership_home.avif'

const LEARN_MORE_URL = 'https://Linkora.com'

const partnerBenefits = [
  'Complimentary Pro access for your users',
  'No API or tech setup required',
  'Fast onboarding and rollout',
  'Custom DM branding (e.g. Powered by Your Brand)',
  'Scales with your user base',
  'Flexible partner pricing',
]
</script>

<template>
  <section class="bg-canvas py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-center text-xs font-bold uppercase tracking-wider text-eyebrow">
        Built for affiliate platforms
      </p>
      <h2 class="mt-3 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Linkora Partner Program
      </h2>
      <p class="mx-auto mt-4 text-center text-base leading-relaxed text-ink-muted">
        Let your users access Linkora Pro at no cost to them. Our partner program is designed for
        brands and affiliate platforms looking to boost user success with automated Instagram
        DMs—without any tech headaches.
      </p>

      <div class="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div class="flex justify-center lg:justify-start">
          <img
            :src="PARTNER_IMAGE"
            alt="Linkora partner user analytics dashboard"
            class="block w-full max-w-md border-0 lg:max-w-lg"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="max-w-xl lg:max-w-none">
          <h3 class="text-xl font-bold text-ink">Partner Benefits</h3>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-base text-ink-muted">
            <li v-for="(item, i) in partnerBenefits" :key="i">
              {{ item }}
            </li>
          </ul>

          <h3 class="mt-8 text-xl font-bold text-ink">Exclusive Benefits</h3>
          <p class="mt-3 text-base leading-relaxed text-ink-muted">
            This program is built for brands that want to drive affiliate growth through DMs. No API
            needed. Custom branding options like &quot;Powered by [Your Brand]&quot; are available to
            make it your own.
          </p>

          <div class="mt-8">
            <a
              :href="LEARN_MORE_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand shadow-sm transition hover:bg-btn-dark-hover hover:text-on-brand"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

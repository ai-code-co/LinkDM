<script setup lang="ts">
const partnerBenefits = [
  'Complimentary Pro access for your users',
  'Drive more affiliate revenue via DM automation',
  'No API or tech setup required',
  'Fast onboarding and rollout',
  'Flexible partner pricing based on volume and usage',
  'Custom DM branding (e.g. Powered by Amazon)',
]

const enterpriseIncludes = [
  'Dedicated Account Manager',
  'API Integration available',
  'Custom API integration',
]
</script>

<template>
  <section class="bg-canvas py-10 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto grid gap-4 lg:grid-cols-2 lg:gap-5">
        <div
          class="flex flex-col rounded-2xl border-2 border-[#4B5581] bg-surface p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(75,85,129,0.12),0_24px_60px_-8px_rgba(75,85,129,0.18),0_40px_80px_-12px_rgba(75,85,129,0.1)] sm:p-7"
        >
          <h2 class="text-xl font-bold text-[#4B5581] sm:text-2xl">Linkora for Partners</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink sm:text-base">
            Offer your users fully sponsored access to Linkora Pro, with your brand front and center.
            Designed for affiliate programs, Linkora helps your users drive more sales through automated
            DMs.
          </p>
          <hr class="mt-5 border-t border-[#4B5581]" />
          <p class="mt-5 text-sm font-bold text-ink">Benefits:</p>
          <ul class="mt-3 space-y-2.5 text-sm text-ink">
            <li v-for="item in partnerBenefits" :key="item" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#4B5581] text-[10px] font-bold text-[#4B5581]"
                aria-hidden="true"
              >✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a
            href="https://www.Linkora.com"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 block w-full rounded-xl bg-[#4B5581] py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-[#3d4569]"
          >
            Contact Partner Team
          </a>
        </div>

        <div
          class="flex flex-col rounded-2xl border-2 border-violet-500 bg-surface p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.12),0_24px_60px_-8px_rgba(139,92,246,0.2),0_40px_80px_-12px_rgba(139,92,246,0.1)] sm:p-7"
        >
          <h2 class="text-xl font-bold text-violet-500 sm:text-2xl">Enterprise</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink sm:text-base">
            Custom solutions tailored to your needs, including a dedicated account manager and API
            integration.
          </p>
          <hr class="mt-5 border-t border-violet-500" />
          <p class="mt-5 text-sm font-bold text-ink">Enterprise includes:</p>
          <ul class="mt-3 space-y-2.5 text-sm text-ink">
            <li v-for="item in enterpriseIncludes" :key="item" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-violet-500 text-[10px] font-bold text-violet-500"
                aria-hidden="true"
              >✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a
            href="https://www.Linkora.com"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 block w-full rounded-xl bg-violet-500 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-violet-600"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

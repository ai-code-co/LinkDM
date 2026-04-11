<template>
  <section class=" bg-white py-14 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <div class="mx-auto  space-y-6">
        
        <div
          class="flex flex-col rounded-2xl border-2 border-[#4B5581] bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(75,85,129,0.12),0_24px_60px_-8px_rgba(75,85,129,0.18),0_40px_80px_-12px_rgba(75,85,129,0.1)] sm:p-10"
        >
          <h2 class="text-2xl font-bold text-[#4B5581] sm:text-3xl">LinkDM for Partners</h2>
          <p class="mt-4 text-base leading-relaxed text-gray-900">
            Offer your users fully sponsored access to LinkDM Pro, with your brand front and center.
            Designed for affiliate programs, LinkDM helps your users drive more sales through automated
            DMs.
          </p>
          <hr class="mt-6 border-t border-[#4B5581]" />
          <p class="mt-6 text-sm font-bold text-gray-900">Benefits:</p>
          <ul class="mt-3 space-y-3 text-sm text-gray-900">
            <li v-for="item in partnerBenefits" :key="item" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#4B5581] text-[10px] font-bold text-[#4B5581]"
                aria-hidden="true"
              >✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a
            href="https://www.linkdm.com"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 block w-full rounded-xl bg-[#4B5581] py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-[#3d4569]"
          >
            Contact Partner Team
          </a>
        </div>

       
        <div
          class="flex flex-col rounded-2xl border-2 border-violet-500 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.12),0_24px_60px_-8px_rgba(139,92,246,0.2),0_40px_80px_-12px_rgba(139,92,246,0.1)] sm:p-10"
        >
          <h2 class="text-2xl font-bold text-violet-500 sm:text-3xl">Enterprise</h2>
          <p class="mt-4 text-base leading-relaxed text-gray-900">
            Custom solutions tailored to your needs, including a dedicated account manager and API
            integration.
          </p>
          <hr class="mt-6 border-t border-violet-500" />
          <p class="mt-6 text-sm font-bold text-gray-900">Enterprise includes:</p>
          <ul class="mt-3 space-y-3 text-sm text-gray-900">
            <li v-for="item in enterpriseIncludes" :key="item" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-violet-500 text-[10px] font-bold text-violet-500"
                aria-hidden="true"
              >✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a
            href="https://www.linkdm.com"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 block w-full rounded-xl bg-violet-500 py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-violet-600"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

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

<script setup lang="ts">
import { computed, ref } from 'vue'

type Billing = 'monthly' | 'yearly'

const billing = ref<Billing>('monthly')

const freeFeatures = [
  'Access Last 10 Posts',
  'Link Unlimited Posts',
  'Posts & Reels Auto-Reply',
  'Facebook Automations',
  'Story Automations',
  'Next Post',
  'Inbox Starters',
]

const proExtraFeatures = [
  'Remove LinkDM Branding',
  'Comment Auto-Reply',
  'Universal Triggers',
  'Flow Automation',
  'Lead Gen [NEW]',
  'DM Planner [NEW]',
  'Follower Growth Tool',
  'Reminder DMs',
  'Access to Rewind',
  'Referral Program',
  'Inbox Automation',
  'Advertising Automation',
  'IG Live Automation',
  'Slow Down Mode',
  'Priority Support',
]

const platinumExtraFeatures = [
  'Early Access New Features',
  'Live Chat with LinkDM team',
  'DM Overflow Queue',
  'Teams [Coming Soon]',
]

const proPrice = computed(() =>
  billing.value === 'monthly'
    ? { amount: '$19', period: 'USD', sub: 'Per month' }
    : { amount: '$182', period: '', sub: 'Yearly', badge: 'Includes 20% Discount' },
)

const platinumPrice = computed(() =>
  billing.value === 'monthly'
    ? { amount: '$99', period: 'USD', sub: 'Per month' }
    : { amount: '$832', period: '', sub: 'Yearly', badge: 'Includes 30% Discount' },
)
</script>

<template>
  <section class="bg-white pb-16 sm:pb-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <div class="mb-8 flex justify-center sm:mb-10">
        <a
          href="#plan-comparison"
          class="text-sm font-semibold text-[#1484fa] underline decoration-blue-600 underline-offset-4 hover:text-blue-700"
        >
          View plan comparison
        </a>
      </div>

      <div
        class="mx-auto mb-10 flex max-w-md justify-center rounded-full border border-gray-200 bg-gray-100/80 p-1 sm:mb-12"
        role="tablist"
        aria-label="Billing period"
      >
        <button
          type="button"
          role="tab"
          :aria-selected="billing === 'monthly'"
          class="flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-6"
          :class="
            billing === 'monthly'
              ? 'bg-[#1487fa] text-white shadow-sm'
              : 'text-gray-700 hover:text-gray-900'
          "
          @click="billing = 'monthly'"
        >
          Monthly Pricing
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="billing === 'yearly'"
          class="flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-6"
          :class="
            billing === 'yearly'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-700 hover:text-gray-900'
          "
          @click="billing = 'yearly'"
        >
          Yearly Pricing
        </button>
      </div>

      <div class="grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-6">
        
        <div
          class="flex flex-col rounded-2xl border-2 border-sky-300 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(14,165,233,0.12),0_24px_60px_-8px_rgba(14,165,233,0.18),0_40px_80px_-12px_rgba(14,165,233,0.1)] sm:p-8"
        >
          <h2 class="text-xl font-bold text-[#1487fa]">Free</h2>
          <div class="mt-4">
            <span class="text-4xl font-bold tracking-tight text-gray-900">$0</span>
            <p class="mt-1 text-sm font-medium text-gray-500">Free</p>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-gray-600">
            Connect <strong class="text-gray-900">1 Instagram Account</strong> and send up to
            <strong class="text-gray-900">1,000 DMs</strong> per month
          </p>
          <hr class="mt-6 border-t border-sky-100" />
          <p class="mt-6 text-xs font-bold uppercase tracking-wide text-gray-900">Free includes:</p>
          <ul class="mt-3 flex-1 space-y-3 text-sm text-gray-700">
            <li v-for="f in freeFeatures" :key="f" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white"
                aria-hidden="true"
              >✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/signup"
            class="mt-8 block w-full rounded-xl bg-blue-600 py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
          >
            Get Started for Free
          </NuxtLink>
        </div>

        
        <div
          class="flex flex-col rounded-2xl border-2 border-amber-400 bg-amber-50 p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(245,158,11,0.15),0_24px_60px_-8px_rgba(245,158,11,0.22),0_40px_80px_-12px_rgba(245,158,11,0.12)] sm:p-8"
        >
          <div class="flex items-center justify-between gap-2">
            <h2 class="text-xl font-bold text-amber-600">Pro</h2>
            <span
              class="shrink-0 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
            >
              Popular
            </span>
          </div>
          <div class="mt-4">
            <span class="text-4xl font-bold tracking-tight text-gray-900">{{ proPrice.amount }}</span>
            <span v-if="proPrice.period" class="ml-1 text-xl font-semibold text-gray-800">
              {{ proPrice.period }}
            </span>
            <p v-if="proPrice.badge" class="mt-1 text-sm font-semibold text-green-600">
              {{ proPrice.badge }}
            </p>
            <p class="mt-1 text-sm font-medium text-gray-500">{{ proPrice.sub }}</p>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-gray-600">
            Connect up to <strong class="text-gray-900">3 Instagram Accounts</strong> &amp; send up to
            <strong class="text-gray-900">25,000 DMs</strong> per month
            <template v-if="billing === 'yearly'"> per account / per month</template>
          </p>
          <hr class="mt-6 border-t border-amber-100" />
          <p class="mt-6 text-xs font-bold uppercase tracking-wide text-gray-900">
            Everything in Free, plus:
          </p>
          <ul class="mt-3 flex-1 space-y-3 text-sm text-gray-700">
            <li v-for="f in proExtraFeatures" :key="f" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white"
                aria-hidden="true"
              >✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/signup"
            class="mt-8 block w-full rounded-xl bg-amber-400 py-3.5 text-center text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500"
          >
            Upgrade to Pro
          </NuxtLink>
        </div>

      
        <div
          class="flex flex-col rounded-2xl border-2 border-gray-300 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(15,23,42,0.06),0_24px_60px_-8px_rgba(15,23,42,0.1),0_40px_80px_-12px_rgba(15,23,42,0.08)] sm:p-8"
        >
          <h2 class="text-xl font-bold text-gray-600">Platinum+</h2>
          <div class="mt-4">
            <span class="text-4xl font-bold tracking-tight text-gray-900">{{
              platinumPrice.amount
            }}</span>
            <span v-if="platinumPrice.period" class="ml-1 text-xl font-semibold text-gray-800">
              {{ platinumPrice.period }}
            </span>
            <p v-if="platinumPrice.badge" class="mt-1 text-sm font-semibold text-green-600">
              {{ platinumPrice.badge }}
            </p>
            <p class="mt-1 text-sm font-medium text-gray-500">{{ platinumPrice.sub }}</p>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-gray-600">
            Connect up to <strong class="text-gray-900">10 Instagram Accounts</strong> &amp; send up to
            <strong class="text-gray-900">300,000 DMs</strong> per month
            <template v-if="billing === 'yearly'"> per account / per month</template>
          </p>
          <hr class="mt-6 border-t border-gray-200" />
          <p class="mt-6 text-xs font-bold uppercase tracking-wide text-gray-900">
            Everything in Pro, plus:
          </p>
          <ul class="mt-3 flex-1 space-y-3 text-sm text-gray-700">
            <li v-for="f in platinumExtraFeatures" :key="f" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-400 text-[10px] font-bold text-white"
                aria-hidden="true"
              >✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/signup"
            class="mt-8 block w-full rounded-xl bg-gray-200 py-3.5 text-center text-sm font-bold text-gray-900 transition hover:bg-gray-300"
          >
            Upgrade to Platinum+
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

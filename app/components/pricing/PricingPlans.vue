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
  <section class="bg-canvas pb-10 sm:pb-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mb-6 flex justify-center sm:mb-8">
        <a
          href="#plan-comparison"
          class="text-sm font-semibold text-brand underline decoration-link underline-offset-4 hover:text-link-hover"
        >
          View plan comparison
        </a>
      </div>

      <div
        class="mx-auto mb-8 flex max-w-md justify-center rounded-full border border-edge bg-plan-toggle-bg p-1 sm:mb-10"
        role="tablist"
        aria-label="Billing period"
      >
        <button
          type="button"
          role="tab"
          :aria-selected="billing === 'monthly'"
          class="flex-1 rounded-full px-3 py-2 text-sm font-semibold transition sm:px-5"
          :class="
            billing === 'monthly'
              ? 'bg-brand text-on-brand shadow-sm'
              : 'text-ink-muted hover:text-ink'
          "
          @click="billing = 'monthly'"
        >
          Monthly Pricing
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="billing === 'yearly'"
          class="flex-1 rounded-full px-3 py-2 text-sm font-semibold transition sm:px-5"
          :class="
            billing === 'yearly'
              ? 'bg-brand text-on-brand shadow-sm'
              : 'text-ink-muted hover:text-ink'
          "
          @click="billing = 'yearly'"
        >
          Yearly Pricing
        </button>
      </div>

      <div class="grid gap-4 md:grid-cols-2 md:items-stretch lg:grid-cols-3 lg:gap-5">
        <div
          class="flex flex-col rounded-2xl border-2 border-plan-free-border bg-surface p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(14,165,233,0.12),0_24px_60px_-8px_rgba(14,165,233,0.18),0_40px_80px_-12px_rgba(14,165,233,0.1)] sm:p-6"
        >
          <h2 class="text-lg font-bold text-plan-free-title sm:text-xl">Free</h2>
          <div class="mt-3">
            <span class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">$0</span>
            <p class="mt-1 text-sm font-medium text-ink-subtle">Free</p>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted">
            Connect <strong class="text-ink">1 Instagram Account</strong> and send up to
            <strong class="text-ink">1,000 DMs</strong> per month
          </p>
          <hr class="mt-5 border-t border-plan-free-hr" />
          <p class="mt-5 text-xs font-bold uppercase tracking-wide text-ink">Free includes:</p>
          <ul class="mt-3 flex-1 space-y-2.5 text-sm text-ink-muted">
            <li v-for="f in freeFeatures" :key="f" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-on-brand"
                aria-hidden="true"
              >✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/signup"
            class="mt-6 block w-full rounded-xl bg-brand py-3 text-center text-sm font-bold text-on-brand shadow-sm transition hover:bg-brand-hover"
          >
            Get Started for Free
          </NuxtLink>
        </div>

        <div
          class="flex flex-col rounded-2xl border-2 border-plan-pro-border bg-plan-pro-bg p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(245,158,11,0.15),0_24px_60px_-8px_rgba(245,158,11,0.22),0_40px_80px_-12px_rgba(245,158,11,0.12)] sm:p-6"
        >
          <div class="flex items-center justify-between gap-2">
            <h2 class="text-lg font-bold text-amber-600 sm:text-xl">Pro</h2>
            <span
              class="shrink-0 rounded-full bg-pro-amber px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
            >
              Popular
            </span>
          </div>
          <div class="mt-3">
            <span class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{{ proPrice.amount }}</span>
            <span v-if="proPrice.period" class="ml-1 text-xl font-semibold text-ink-secondary">
              {{ proPrice.period }}
            </span>
            <p v-if="proPrice.badge" class="mt-1 text-sm font-semibold text-success">
              {{ proPrice.badge }}
            </p>
            <p class="mt-1 text-sm font-medium text-ink-subtle">{{ proPrice.sub }}</p>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted">
            Connect up to <strong class="text-ink">3 Instagram Accounts</strong> &amp; send up to
            <strong class="text-ink">25,000 DMs</strong> per month
            <template v-if="billing === 'yearly'"> per account / per month</template>
          </p>
          <hr class="mt-5 border-t border-plan-pro-hr" />
          <p class="mt-5 text-xs font-bold uppercase tracking-wide text-ink">
            Everything in Free, plus:
          </p>
          <ul class="mt-3 flex-1 space-y-2.5 text-sm text-ink-muted">
            <li v-for="f in proExtraFeatures" :key="f" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pro-amber text-[10px] font-bold text-white"
                aria-hidden="true"
              >✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/signup"
            class="mt-6 block w-full rounded-xl bg-amber-400 py-3 text-center text-sm font-bold text-ink shadow-sm transition hover:bg-amber-500"
          >
            Upgrade to Pro
          </NuxtLink>
        </div>

        <div
          class="flex flex-col rounded-2xl border-2 border-plan-plat-border bg-surface p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(15,23,42,0.06),0_24px_60px_-8px_rgba(15,23,42,0.1),0_40px_80px_-12px_rgba(15,23,42,0.08)] sm:p-6"
        >
          <h2 class="text-lg font-bold text-ink-subtle sm:text-xl">Platinum+</h2>
          <div class="mt-3">
            <span class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{{
              platinumPrice.amount
            }}</span>
            <span v-if="platinumPrice.period" class="ml-1 text-xl font-semibold text-ink-secondary">
              {{ platinumPrice.period }}
            </span>
            <p v-if="platinumPrice.badge" class="mt-1 text-sm font-semibold text-success">
              {{ platinumPrice.badge }}
            </p>
            <p class="mt-1 text-sm font-medium text-ink-subtle">{{ platinumPrice.sub }}</p>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted">
            Connect up to <strong class="text-ink">10 Instagram Accounts</strong> &amp; send up to
            <strong class="text-ink">300,000 DMs</strong> per month
            <template v-if="billing === 'yearly'"> per account / per month</template>
          </p>
          <hr class="mt-5 border-t border-edge" />
          <p class="mt-5 text-xs font-bold uppercase tracking-wide text-ink">
            Everything in Pro, plus:
          </p>
          <ul class="mt-3 flex-1 space-y-2.5 text-sm text-ink-muted">
            <li v-for="f in platinumExtraFeatures" :key="f" class="flex gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tier-plat text-[10px] font-bold text-white"
                aria-hidden="true"
              >✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/signup"
            class="mt-6 block w-full rounded-xl bg-btn-muted py-3 text-center text-sm font-bold text-ink transition hover:bg-btn-muted-hover"
          >
            Upgrade to Platinum+
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

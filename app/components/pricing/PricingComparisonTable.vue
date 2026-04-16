<script setup lang="ts">
type Cell = 'yes' | 'no' | 'text'

interface Row {
  feature: string
  free: Cell
  freeText?: string
  pro: Cell
  proText?: string
  platinum: Cell
  platinumText?: string
}

const rows: Row[] = [
  { feature: 'Price', free: 'text', freeText: '$0', pro: 'text', proText: '$19 USD', platinum: 'text', platinumText: '$99 USD' },
  { feature: 'DM Send Limit', free: 'text', freeText: '1,000 per month', pro: 'text', proText: '25,000 per month', platinum: 'text', platinumText: '300,000 per month' },
  { feature: 'Instagram Accounts', free: 'text', freeText: '1', pro: 'text', proText: '3', platinum: 'text', platinumText: '10' },
  { feature: 'Post & Reels Automation', free: 'yes', pro: 'yes', platinum: 'yes' },
  { feature: 'Story Auto-Reply', free: 'yes', pro: 'yes', platinum: 'yes' },
  { feature: 'Story Mention Auto-Reply', free: 'yes', pro: 'yes', platinum: 'yes' },
  { feature: 'Next Post Feature', free: 'yes', pro: 'yes', platinum: 'yes' },
  { feature: 'Inbox Conversation Starters', free: 'yes', pro: 'yes', platinum: 'yes' },
  { feature: 'Facebook Auto-Reply', free: 'yes', pro: 'yes', platinum: 'yes' },
  { feature: 'Share to Inbox Trigger', free: 'yes', pro: 'yes', platinum: 'yes' },
  { feature: 'Remove Branding', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Comment Auto-Reply', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Lead Generation', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'DM Planner', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Universal Triggers', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Follower Growth Tool', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Backsend DMs via Rewind', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'IG Live Auto-Reply', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Inbox Automation', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Advertising Auto-Reply', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'Priority Support', free: 'no', pro: 'yes', platinum: 'yes' },
  { feature: 'High Volume Rate Limiter', free: 'no', pro: 'no', platinum: 'yes' },
  { feature: 'Early Access New Feature', free: 'no', pro: 'no', platinum: 'yes' },
  { feature: 'DM Overflow Queue', free: 'no', pro: 'no', platinum: 'yes' },
  { feature: 'Slow Down Mode', free: 'no', pro: 'no', platinum: 'yes' },
]

function textCell(row: Row, tier: 'free' | 'pro' | 'platinum'): string {
  if (tier === 'free') return row.freeText ?? '—'
  if (tier === 'pro') return row.proText ?? '—'
  return row.platinumText ?? '—'
}

function isCheck(row: Row, tier: 'free' | 'pro' | 'platinum') {
  return row[tier] === 'yes'
}

function isNo(row: Row, tier: 'free' | 'pro' | 'platinum') {
  return row[tier] === 'no'
}

function isText(row: Row, tier: 'free' | 'pro' | 'platinum') {
  return row[tier] === 'text'
}

const yesIconClass =
  'inline-flex size-5 items-center justify-center rounded bg-[#4ADE80] text-[11px] font-bold leading-none text-white'

const noIconClass = 'inline-block text-base leading-none'
</script>

<template>
  <section id="plan-comparison" class="bg-canvas py-10 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <p class="text-center text-xs font-semibold uppercase tracking-wider text-link">
        Feature breakdown
      </p>
      <h2 class="mt-2.5 text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        Plan Comparison
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-muted sm:text-base">
        Find the plan that&apos;s right for you.
      </p>

      <div class="mt-8 overflow-x-auto rounded-xl border border-table-line shadow-sm sm:mt-10">
        <table class="w-full min-w-[640px] border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-table-line bg-table-head">
              <th scope="col" class="px-3 py-3.5 font-bold text-ink sm:px-5">Features</th>
              <th scope="col" class="px-3 py-3.5 text-center font-bold text-ink sm:px-5">
                Free
              </th>
              <th scope="col" class="px-3 py-3.5 text-center font-bold text-ink sm:px-5">
                Pro
              </th>
              <th scope="col" class="px-3 py-3.5 text-center font-bold text-ink sm:px-5">
                Platinum+
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in rows"
              :key="row.feature"
              class="border-b border-table-line bg-surface"
            >
              <th
                scope="row"
                class="px-3 py-3 font-medium text-ink sm:px-5 sm:py-3.5"
              >
                {{ row.feature }}
              </th>
              <td class="px-3 py-3 text-center sm:px-5 sm:py-3.5">
                <span v-if="isText(row, 'free')" class="font-medium text-ink-secondary">{{
                  textCell(row, 'free')
                }}</span>
                <span v-else-if="isCheck(row, 'free')" :class="yesIconClass" aria-label="Included"
                  >✓</span
                >
                <span v-else-if="isNo(row, 'free')" :class="noIconClass" aria-label="Not included"
                  >❌</span
                >
              </td>
              <td class="px-3 py-3 text-center sm:px-5 sm:py-3.5">
                <span v-if="isText(row, 'pro')" class="font-medium text-ink-secondary">{{
                  textCell(row, 'pro')
                }}</span>
                <span v-else-if="isCheck(row, 'pro')" :class="yesIconClass" aria-label="Included"
                  >✓</span
                >
                <span v-else-if="isNo(row, 'pro')" :class="noIconClass" aria-label="Not included"
                  >❌</span
                >
              </td>
              <td class="px-3 py-3 text-center sm:px-5 sm:py-3.5">
                <span v-if="isText(row, 'platinum')" class="font-medium text-ink-secondary">{{
                  textCell(row, 'platinum')
                }}</span>
                <span v-else-if="isCheck(row, 'platinum')" :class="yesIconClass" aria-label="Included"
                  >✓</span
                >
                <span
                  v-else-if="isNo(row, 'platinum')"
                  :class="noIconClass"
                  aria-label="Not included"
                  >❌</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

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
  <section id="plan-comparison" class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-center text-xs font-semibold uppercase tracking-wider text-blue-600">
        Feature breakdown
      </p>
      <h2 class="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Plan Comparison
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600">
        Find the plan that&apos;s right for you.
      </p>

      <div class="mt-12 overflow-x-auto rounded-xl border border-sky-100 shadow-sm">
        <table class="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr class="border-b border-sky-100 bg-sky-50/70">
              <th scope="col" class="px-4 py-4 font-bold text-gray-900 sm:px-6">Features</th>
              <th scope="col" class="px-4 py-4 text-center font-bold text-gray-900 sm:px-6">
                Free
              </th>
              <th scope="col" class="px-4 py-4 text-center font-bold text-gray-900 sm:px-6">
                Pro
              </th>
              <th scope="col" class="px-4 py-4 text-center font-bold text-gray-900 sm:px-6">
                Platinum+
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in rows"
              :key="row.feature"
              class="border-b border-sky-100 bg-white"
            >
              <th
                scope="row"
                class="px-4 py-3.5 font-medium text-gray-900 sm:px-6"
              >
                {{ row.feature }}
              </th>
              <td class="px-4 py-3.5 text-center sm:px-6">
                <span v-if="isText(row, 'free')" class="font-medium text-gray-800">{{
                  textCell(row, 'free')
                }}</span>
                <span v-else-if="isCheck(row, 'free')" :class="yesIconClass" aria-label="Included"
                  >✓</span
                >
                <span v-else-if="isNo(row, 'free')" :class="noIconClass" aria-label="Not included"
                  >❌</span
                >
              </td>
              <td class="px-4 py-3.5 text-center sm:px-6">
                <span v-if="isText(row, 'pro')" class="font-medium text-gray-800">{{
                  textCell(row, 'pro')
                }}</span>
                <span v-else-if="isCheck(row, 'pro')" :class="yesIconClass" aria-label="Included"
                  >✓</span
                >
                <span v-else-if="isNo(row, 'pro')" :class="noIconClass" aria-label="Not included"
                  >❌</span
                >
              </td>
              <td class="px-4 py-3.5 text-center sm:px-6">
                <span v-if="isText(row, 'platinum')" class="font-medium text-gray-800">{{
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

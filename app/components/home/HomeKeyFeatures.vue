<script setup lang="ts">
withDefaults(
  defineProps<{

    showHeader?: boolean
  }>(),
  { showHeader: true },
)

type Tier = 'basic' | 'pro' | 'platinum'

interface Feature {
  icon: string
  title: string
  description: string
  tier: Tier
}

const features: Feature[] = [
  {
    tier: 'basic',
    icon: 'plus',
    title: 'Post AutoDM',
    description: 'Automatically reply to Instagram Post comments with a DM.',
  },
  {
    tier: 'basic',
    icon: 'reels',
    title: 'Reels AutoDM',
    description: 'Automatically reply to Instagram Reel comments with a DM.',
  },
  {
    tier: 'basic',
    icon: 'facebook',
    title: 'Facebook AutoDM',
    description: 'Auto-reply to Facebook comments with a DM.',
  },
  {
    tier: 'basic',
    icon: 'instagram',
    title: 'Story AutoDM',
    description: 'Automatically respond to story replies with a DM.',
  },
  {
    tier: 'basic',
    icon: 'at',
    title: 'Story Mentions',
    description: 'Automatically reply to story @mentions with a DM.',
  },
  {
    tier: 'basic',
    icon: 'message',
    title: 'Inbox Starters',
    description: 'Display up to 4 conversation starters in your inbox.',
  },
  {
    tier: 'basic',
    icon: 'hand',
    title: 'Next Post',
    description: 'Draft your next linked post in advance.',
  },
  {
    tier: 'basic',
    icon: 'cursor',
    title: 'Click Analytics',
    description: 'Track link click analytics on DMs sent.',
  },
  {
    tier: 'pro',
    icon: 'flow',
    title: 'Flow Automation',
    description: 'Schedule a sequence of DMs and reminders after engagement.',
  },
  {
    tier: 'pro',
    icon: 'search',
    title: 'Comment Auto-Reply',
    description: 'Automatically reply to comments with a comment once a DM has been sent.',
  },
  {
    tier: 'pro',
    icon: 'tag',
    title: 'White Label',
    description: 'Remove LinkDM branding from DMs sent.',
  },
  {
    tier: 'pro',
    icon: 'users',
    title: 'Multiple Accounts',
    description: 'Connect up to 3 Instagram Accounts to your LinkDM Profile.',
  },
  {
    tier: 'pro',
    icon: 'envelope',
    title: 'Increased DM Send Limit',
    description: 'Send up to 25,000 DMs per account/per month.',
  },
  {
    tier: 'pro',
    icon: 'globe',
    title: 'Universal Triggers',
    description: 'Setup global triggers to use across multiple placements.',
  },
  {
    tier: 'pro',
    icon: 'rewind',
    title: 'Rewind',
    description: 'Backsend DMs to eligible comments.',
  },
  {
    tier: 'pro',
    icon: 'megaphone',
    title: 'Advertising AutoDM',
    description: 'Auto-reply to comments on your sponsored content.',
  },
  {
    tier: 'pro',
    icon: 'send',
    title: 'Inbox Automation',
    description: 'Automatically reply to Inbox messages.',
  },
  {
    tier: 'pro',
    icon: 'referral',
    title: 'Referral Program',
    description: 'Access our referral program and start earning.',
  },
  {
    tier: 'pro',
    icon: 'lead',
    title: 'Lead Generation',
    description: 'Capture email addresses directly in chat.',
  },
  {
    tier: 'pro',
    icon: 'calendar',
    title: 'DM Planner',
    description: 'Draft DMs for scheduled posts in advance.',
  },
  {
    tier: 'pro',
    icon: 'grid',
    title: 'DM Templates',
    description: 'Save and re-use DMs with ease.',
  },
  {
    tier: 'pro',
    icon: 'ticket',
    title: 'DM Coupons',
    description: 'Send coupons via DMs.',
  },
  {
    tier: 'pro',
    icon: 'code',
    title: 'API Integrations',
    description: 'Connect lead forms to Kit and Flodesk.',
  },
  {
    tier: 'platinum',
    icon: 'gauge',
    title: 'DM Send Limit+',
    description: 'Send up to 300,000 DMs per account/per month.',
  },
  {
    tier: 'platinum',
    icon: 'accountsPlus',
    title: 'Accounts+',
    description: 'Connect up to 10 Instagram accounts to your LinkDM profile.',
  },
  {
    tier: 'platinum',
    icon: 'queue',
    title: 'DM Queue',
    description: 'Never miss sending a DM with the advance queue system.',
  },
  {
    tier: 'platinum',
    icon: 'slow',
    title: 'Slow Down Mode',
    description: 'When your Reels are blowing up, Let us slow down your automation.',
  },
]


function iconBoxClass(tier: Tier) {
  if (tier === 'basic') return 'bg-[#1877F2] text-white'
  if (tier === 'pro') return 'bg-[#F7A833] text-white'
  return 'bg-[#6B7280] text-white'
}
</script>

<template>
  <section class="bg-white pb-16 sm:pb-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <template v-if="showHeader">
        <p class="text-center text-xs font-bold uppercase tracking-wider text-[#1487fa]">
          Key features
        </p>
        <h2 class="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Unlock The Full Potential
        </h2>
        <p class="mx-auto mt-4  text-center text-base text-gray-600">
          Dive deep into LinkDM&apos;s capabilities with these standout features, each designed to
          enhance your experience and streamline your tasks. Discover what sets us apart.
        </p>
      </template>

      <div
        class="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        :class="showHeader ? 'mt-12' : 'mt-0'"
      >
        <div
          v-for="(f, i) in features"
          :key="i"
          class="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-colors duration-200 hover:border-blue-600 sm:p-5"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
            :class="iconBoxClass(f.tier)"
          >
            <HomeFeatureIcon :name="f.icon" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="font-bold text-gray-900">
                {{ f.title }}
              </h3>
              <span
                v-if="f.tier === 'pro'"
                class="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white"
              >
                Pro
              </span>
              <span
                v-if="f.tier === 'platinum'"
                class="rounded-full bg-gray-500 px-2 py-0.5 text-xs font-semibold text-white"
              >
                Platinum
              </span>
            </div>
            <p class="mt-1 text-sm leading-relaxed text-gray-600">
              {{ f.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

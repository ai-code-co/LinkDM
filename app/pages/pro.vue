<script setup lang="ts">
const proFeatureRows = [
  {
    badge: 'Pro',
    title: 'Send up to 25,000 DMs Per Month',
    description:
      'Upgrade to Linkora Pro and send up to 25,000 DMs per month. Elevate your Instagram marketing game and watch your affiliate revenue soar.',
    image: '/featurea.png',
    imageAlt: 'Linkora Pro — DM limit and Instagram automation',
  },
  {
    badge: 'Pro',
    title: 'Auto-Reply to Sponsored Ad Comments',
    description:
      "Auto-reply to post comments on your sponsored content with a DM sent directly to the user's inbox. Respond to keywords or all comments.",
    image: '/featuref.png',
    imageAlt: 'Auto-reply to sponsored ad comments with a DM',
  },
]
</script>

<template>
  <div>
    <ProHero />
    <HomeKeyFeatures :show-header="false" />
    <HomeTestimonials variant="pro-creators" />
    <HomeFeatureBreakdown
      eyebrow="Feature breakdown"
      title="What's Included in Pro"
      subtitle="See what you unlock when upgrading to Linkora Pro"
      :rows="proFeatureRows"
    />
    <HomeFaq />
    <HomeBottomCta />
  </div>
</template>

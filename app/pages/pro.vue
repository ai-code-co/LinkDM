<script setup lang="ts">
const proFeatureRows = [
  {
    badge: 'Pro',
    title: 'Send up to 25,000 DMs Per Month',
    description:
      'Upgrade to LinkDM Pro and send up to 25,000 DMs per month. Elevate your Instagram marketing game and watch your affiliate revenue soar.',
    image:
      'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64c25aed55deb0f9ee9a2dc0_post_homepage_v2.jpg',
    imageAlt: 'LinkDM Pro — DM limit and Instagram automation',
  },
  {
    badge: 'Pro',
    title: 'Auto-Reply to Sponsored Ad Comments',
    description:
      "Auto-reply to post comments on your sponsored content with a DM sent directly to the user's inbox. Respond to keywords or all comments.",
    image:
      'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/64c9e3acc1a5c83f678d5ae4_a319e4bb4260108cea9aa59d43109b10_section6.avif',
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
      subtitle="See what you unlock when upgrading to LinkDM Pro"
      :rows="proFeatureRows"
    />
    <HomeFaq />
    <HomeBottomCta />
  </div>
</template>

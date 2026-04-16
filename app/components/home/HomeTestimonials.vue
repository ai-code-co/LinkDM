<script setup lang="ts">
import { computed } from 'vue'

const QUOTE_ICON =
  'https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a6c9412aae6_double-quotes-l.svg'

interface Testimonial {
  quote: string
  avatar: string
  avatarAlt: string
  handle: string
  role: string
  followers: string
  avatarIsLogo?: boolean
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "I love this tool! I tried a few competitors first and they had a very steep learning curve. LinkDM was so much easier to understand. In the month that I've started using it, I've doubled my earnings through Instagram affiliate marketing.",
    avatar:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/64ded2a5a3fa6068100222f4_64c251764a9b193611faa4fd_MsGoldgirl.jpg',
    avatarAlt: 'MsGoldgirl profile photo',
    handle: '@msGoldgirl',
    role: 'Digital Creator',
    followers: '73K followers',
  },
  {
    quote:
      "Couldn't be happier using LinkDM! So easy and user friendly and the customer service alone is 5 stars!!",
    avatar:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/64e55435999442a59d2770cf_338378588_729298502282022_4369451311760468215_n.jpg',
    avatarAlt: 'Nicole profile photo',
    handle: '@nicoles_outfit_inspirations',
    role: 'Fashion Creator',
    followers: '211K followers',
  },
  {
    quote:
      'I absolutely love the service LinkDM provides! They don\'t cost a thing and they help me send links to thousands of my followers, efficiently and effectively. I also love how user friendly their website is. It was super easy for me to connect my Instagram account and start linking my posts. They are also available to chat via the instagram messenger if you have a question or need help trouble shooting. I highly recommend using their service!',
    avatar:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/64e2d553bcf173db90263dce_339110832_1389060248578148_3699831609460699625_n.jpg',
    avatarAlt: 'Just Jacsy profile photo',
    handle: '@just.jacsy',
    role: 'Amazon Creator',
    followers: '295K followers',
  },
]

const proCreatorsTestimonials: Testimonial[] = [
  {
    quote:
      "LinkDM has changed my online business! I highly recommend their services. Easy to use, easy to navigate. Great customer service. I couldn't love a service more. If you are thinking on using automation for your social platforms, LinkDM is the best!",
    avatar: 'https://i.pravatar.cc/128?u=eatwithcarmen',
    avatarAlt: '@eatwithcarmen_ profile photo',
    handle: '@eatwithcarmen_',
    role: 'Creator',
    followers: '224k followers',
  },
  {
    quote:
      'Used for a product launch and was great to be able to set up an automation to our unique link via DM',
    avatar: 'https://logo.clearbit.com/bondisands.com.au',
    avatarAlt: 'Bondi Sands logo',
    handle: '@bondisands',
    role: 'Beauty / Retail',
    followers: '1.1M followers',
    avatarIsLogo: true,
  },
  {
    quote:
      "I've been using LinkDM for a couple of months and love it. It is super EASY to use and works flawlessly. They are constantly upgrading the tool with new features. Amazing customer service. Highly recommend!",
    avatar: 'https://i.pravatar.cc/128?u=justglow011',
    avatarAlt: '@Justglow011 profile photo',
    handle: '@Justglow011',
    role: 'Fashion Creator',
    followers: '125K followers',
  },
]

const props = withDefaults(
  defineProps<{
   
    variant?: 'default' | 'pro-creators'
    eyebrow?: string
    title?: string
    subtitle?: string
    testimonials?: Testimonial[]
    ctaLabel?: string
    ctaHref?: string
  }>(),
  {
    variant: 'default',
    ctaHref: 'https://linkdm.com',
  },
)

const eyebrowText = computed(() => {
  if (props.eyebrow !== undefined) return props.eyebrow
  if (props.variant === 'pro-creators') return 'Creators'
  return 'Testimonials'
})

const titleText = computed(() => {
  if (props.title !== undefined) return props.title
  if (props.variant === 'pro-creators') return "Who's Using LinkDM?"
  return 'Trusted by over 48,000+ Creators, Brands and Agencies'
})

const subtitleText = computed(() => {
  if (props.subtitle !== undefined) return props.subtitle
  if (props.variant === 'pro-creators') return 'Just to name a few...'
  return 'Read genuine testimonials from our users and understand the impact of our platform on their success.'
})

const ctaText = computed(() => {
  if (props.ctaLabel !== undefined) return props.ctaLabel
  if (props.variant === 'pro-creators') return 'Read more reviews'
  return 'See all Reviews'
})

const list = computed(() => {
  if (props.testimonials?.length) return props.testimonials
  if (props.variant === 'pro-creators') return proCreatorsTestimonials
  return defaultTestimonials
})

function avatarClass(t: Testimonial) {
  if (t.avatarIsLogo) {
    return 'h-12 w-12 shrink-0 rounded-lg border border-edge bg-surface object-contain p-1.5'
  }
  return 'h-12 w-12 shrink-0 rounded-full object-cover'
}
</script>

<template>
  <section class="bg-canvas-muted py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-center text-xs font-bold uppercase tracking-wider text-eyebrow">
        {{ eyebrowText }}
      </p>
      <h2 class="mt-3 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {{ titleText }}
      </h2>
      <p class="mx-auto mt-4 max-w-3xl text-center text-base text-ink">
        {{ subtitleText }}
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-3 md:items-start">
        <article
          v-for="(t, i) in list"
          :key="i"
          class="relative flex flex-col rounded-2xl bg-surface p-6 shadow-sm sm:p-7"
        >
          <div class="flex gap-0.5 text-pro-amber" aria-label="5 out of 5 stars">
            <span v-for="s in 5" :key="s" aria-hidden="true">★</span>
          </div>
          <p class="mt-4 text-[15px] leading-relaxed text-ink">
            {{ t.quote }}
          </p>
          <div class="mt-6 flex items-end justify-between gap-4">
            <div class="flex min-w-0 gap-3">
              <img
                :src="t.avatar"
                :alt="t.avatarAlt"
                :class="avatarClass(t)"
                width="48"
                height="48"
                loading="lazy"
              />
              <div class="min-w-0">
                <p class="font-bold text-ink">
                  {{ t.handle }}
                </p>
                <p class="text-sm text-ink">
                  {{ t.role }}
                </p>
                <p class="text-sm font-medium text-brand">
                  {{ t.followers }}
                </p>
              </div>
            </div>
            <img
              :src="QUOTE_ICON"
              alt=""
              class="h-10 w-10 shrink-0 opacity-40"
              width="40"
              height="40"
              loading="lazy"
            />
          </div>
        </article>
      </div>

      <div class="mt-10 flex justify-center">
        <a
          :href="ctaHref"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex rounded-lg border border-edge-strong bg-surface px-6 py-2.5 text-base font-medium text-ink shadow-sm transition hover:border-edge hover:bg-surface-elevated"
        >
          {{ ctaText }}
        </a>
      </div>
    </div>
  </section>
</template>

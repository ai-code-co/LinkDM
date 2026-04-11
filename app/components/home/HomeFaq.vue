<script setup lang="ts">
import { ref } from 'vue'

type ParaSegment =
  | { type: 'text'; text: string }
  | { type: 'link'; text: string; href: string; external?: boolean }

type Paragraph = string | ParaSegment[]

interface FaqItem {
  question: string
  paragraphs: Paragraph[]
}

const faqs: FaqItem[] = [
  {
    question: 'What is LinkDM?',
    paragraphs: [
      'LinkDM is an Instagram marketing platform, that lets you automatically send DMs to anyone who comments on your Instagram Reels, Posts, Ads, Inbox, Live or Stories.',
      'LinkDM helps you boost your affiliate revenue, blog views and website traffic by sending DMs with your links so your followers can easily find them.',
    ],
  },
  {
    question: 'Is LinkDM free to use?',
    paragraphs: [
      'LinkDM offers a free tier with the ability to send up to 1,000 DMs per month.',
      'LinkDM users can upgrade to Pro, which includes access to many Pro features as well as the ability to manage up to 3 Instagram accounts. LinkDM Pro costs $19 USD per month.',
    ],
  },
  {
    question: "Why is LinkDM free? What's the catch?",
    paragraphs: [
      'Yes, LinkDM is indeed completely free to get started.',
      'As we strive to empower creators in the fast-paced, competitive digital landscape, we’re providing a high-quality tool to enhance your online interactions at no cost.',
      [
        {
          type: 'text',
          text: 'Users can upgrade to LinkDM Pro for $19 USD per month, giving them access to premium features such as Inbox Automation, Advertising Automation and a higher level of DM sends per month. ',
        },
        {
          type: 'link',
          text: 'See full pricing breakdown here.',
          href: '/pricing',
        },
      ],
      'We operate with transparency, have no hidden costs, and are committed to your success and satisfaction.',
    ],
  },
  {
    question: 'Is LinkDM safe to use?',
    paragraphs: [
      'Yes, LinkDM is safe to use. As a certified Meta Business Partner, LinkDM is in strict compliance with Instagram’s guidelines and policies, ensuring the safety and privacy of your data.',
      'Our platform exclusively uses the official Instagram APIs, which allows secure interaction with Instagram’s services without risking your account’s security.',
      'We are committed to maintaining high standards of security and privacy, making LinkDM a reliable tool for enhancing your Instagram engagement.',
    ],
  },
  {
    question: "Is LinkDM compliant with Instagram's Terms of Service?",
    paragraphs: [
      'LinkDM is a certified Instagram third-party developer and a member of the Meta Business Partner program. This allows us to connect directly to the Instagram API and provide our services to users while remaining 100% compliant with Instagram TOS (Terms of Service).',
    ],
  },
  {
    question: 'Do I need a credit card to use LinkDM for free?',
    paragraphs: [
      'No, you do not need to add a credit card to use the free version of LinkDM. The free version is available to use without requiring a credit card or any other payment information. However, if you decide to upgrade to the Pro version, you will need to provide a valid payment method in order to access the additional features and functionality.',
    ],
  },
  {
    question: 'How do I sign up for LinkDM?',
    paragraphs: [
      [
        { type: 'text', text: 'You can get started with a ' },
        { type: 'link', text: 'free account', href: '/signup' },
        { type: 'text', text: '.' },
      ],
    ],
  },
  {
    question: 'Can LinkDM be used on other social media platforms?',
    paragraphs: ['LinkDM software only works with Instagram and Facebook.'],
  },
  {
    question: 'Why do I need to connect my Facebook account to use LinkDM?',
    paragraphs: [
      'The Instagram API requires users to login with Facebook and to attach both their Instagram and connected Facebook page in order to access software like LinkDM.',
    ],
  },
  {
    question: 'How many DMs can I send with LinkDM?',
    paragraphs: [
      'In LinkDM, we have set a conservative DM send limit that is in accordance with Instagram’s developer guidelines. This limit helps prevent any potential rate limits from Instagram. If you have subscribed to LinkDM Pro your DMs will be queued up and sent at the start of the next hour, if you are using LinkDM Free your DMs will resume sending to new comments only at the start of the next hour.',
    ],
  },
  {
    question: 'Can I try LinkDM for free before committing to a subscription?',
    paragraphs: [
      'Yes, you can sign up and use our free account tier with no core feature limits.',
      [
        { type: 'text', text: 'Get started with a ' },
        { type: 'link', text: 'free account', href: '/signup' },
        { type: 'text', text: '.' },
      ],
    ],
  },
  {
    question: 'Is LinkDM an alternative to Link-in-bio services?',
    paragraphs: [
      'LinkDM doesn’t offer link-in-bio services like Linktree. Instead, it helps brands get more traffic to their Linktree links by sending them directly to the users inbox.',
    ],
  },
  {
    question: 'How do I contact LinkDM customer support if I need help?',
    paragraphs: [
      [
        {
          type: 'text',
          text: 'If you have any questions or need assistance with LinkDM, please send an email to ',
        },
        {
          type: 'link',
          text: 'support@LinkDM.com',
          href: 'mailto:support@LinkDM.com',
        },
        {
          type: 'text',
          text: '. Someone will be in touch with you as soon as possible to assist.',
        },
      ],
    ],
  },
  {
    question: 'Does LinkDM need my Instagram password?',
    paragraphs: [
      'No, we will never request sensitive information from you such as passwords to any platform and you should never provide this information to anyone.',
    ],
  },
]

const open = ref(faqs.map(() => false))

function toggle(i: number) {
  open.value[i] = !open.value[i]
}
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-center text-xs font-bold uppercase tracking-wider text-[#1487fa]">
        Need answers?
      </p>
      <h2 class="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p class="mx-auto mt-4 max-w-4xl text-center text-base text-gray-600">
        Explore common inquiries about our platform and find instant solutions to your questions.
      </p>

      <div class="mt-10 space-y-3 sm:space-y-4">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="rounded-2xl bg-gray-100 px-5 py-4 sm:px-6 sm:py-5"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 text-left"
            :aria-expanded="open[i]"
            :aria-controls="`faq-panel-${i}`"
            :id="`faq-trigger-${i}`"
            @click="toggle(i)"
          >
            <span class="text-base font-bold text-gray-900 sm:text-lg">{{ item.question }}</span>
            <span
              class="inline-flex h-8 w-8 shrink-0 items-center justify-center text-gray-500 transition-transform duration-300 ease-out motion-reduce:transition-none"
              :class="{ 'rotate-180': open[i] }"
              aria-hidden="true"
            >
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            class="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
            :class="open[i] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="min-h-0 overflow-hidden">
              <div
                :id="`faq-panel-${i}`"
                class="space-y-3 pt-3 text-left text-sm leading-relaxed text-gray-800 sm:text-base"
                role="region"
                :aria-labelledby="`faq-trigger-${i}`"
              >
                <template v-for="(para, pi) in item.paragraphs" :key="pi">
                  <p v-if="typeof para === 'string'">
                    {{ para }}
                  </p>
                  <p v-else>
                    <template v-for="(seg, si) in para" :key="si">
                      <span v-if="seg.type === 'text'">{{ seg.text }}</span>
                      <NuxtLink
                        v-else-if="!seg.external && seg.href.startsWith('/')"
                        :to="seg.href"
                        class="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:text-blue-700"
                      >
                        {{ seg.text }}
                      </NuxtLink>
                      <a
                        v-else
                        :href="seg.href"
                        class="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ seg.text }}
                      </a>
                    </template>
                  </p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

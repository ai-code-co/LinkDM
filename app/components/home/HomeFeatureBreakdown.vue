<script setup lang="ts">
import { computed } from 'vue'

interface FeatureBreakdownRow {
  title: string
  description: string
  image: string
  imageAlt: string
  badge?: string
}

const defaultRows: FeatureBreakdownRow[] = [
  {
    title: 'Auto-Reply to Instagram Reel Comments',
    description:
      "Reply to Instagram reel comments automatically with a DM sent straight to the users inbox. Add trigger keywords or respond to all comments.",
    image: '/featurea.png',
    imageAlt: 'Instagram Reel comment auto-reply flow',
  },
  {
    title: 'Auto-Reply to Instagram Post Comments',
    description:
      'Reply to Instagram post comments automatically with a DM sent straight to the users inbox. Add trigger keywords or respond to all comments.',
    image: '/featureb.png',
    imageAlt: 'Instagram post comment auto-reply flow',
  },
  {
    title: 'Auto-Respond to Instagram Story Replies',
    description:
      "Automatically respond to story replies with a DM sent directly to the user's inbox. Add trigger keywords or respond to all replies.",
    image: '/featurec.png',
    imageAlt: 'Instagram story reply auto-DM flow',
  },
  {
    title: 'Auto-Reply to Instagram Story Mentions',
    description:
      "Automatically respond to story @mentions with a message sent directly to the user's inbox.",
    image: '/featured.png',
    imageAlt: 'Instagram story mention auto-reply flow',
  },
  {
    title: 'Inbox Starters',
    description:
      'Display up to 4 conversation starters when a user navigates to your Instagram inbox.',
    image: '/featuree.png',
    imageAlt: 'Instagram inbox conversation starters',
  },
  {
    title: 'Auto-Reply to Sponsored Ad Comments',
    description:
      "Auto-reply to comments on your sponsored content with a DM sent directly to the user's inbox. Respond to keywords or all comments.",
    image: '/featuref.png',
    imageAlt: 'Sponsored ad comment auto-reply flow',
  },
]

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    subtitle?: string
    rows?: FeatureBreakdownRow[]
  }>(),
  {
    eyebrow: 'Feature focus',
    title: 'Feature Breakdown',
    subtitle:
      "Dive into the specifics of each feature, understanding its functionality and how it can elevate your Instagram strategy.",
  },
)

const displayRows = computed(() =>
  props.rows && props.rows.length > 0 ? props.rows : defaultRows,
)

const blobClass = ['bg-pink-100/70', 'bg-violet-100/70', 'bg-rose-100/70', 'bg-purple-100/60', 'bg-sky-100/60', 'bg-orange-100/60']
</script>

<template>
  <section class="bg-canvas py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-center text-xs font-bold uppercase tracking-wider text-eyebrow">
        {{ eyebrow }}
      </p>
      <h2 class="mt-3 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mx-auto mt-4 text-center text-base text-ink-muted">
        {{ subtitle }}
      </p>

      <div class="mt-6">
        <div
          v-for="(row, i) in displayRows"
          :key="i"
          class="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16"
        >
          <div
            class="relative flex justify-center"
            :class="i % 2 === 1 ? 'lg:order-2' : ''"
          >
            <div
              class="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(100%,280px)] w-[min(100%,280px)] -translate-x-1/2 -translate-y-1/2 rounded-[45%] blur-3xl"
              :class="blobClass[i % blobClass.length]"
              aria-hidden="true"
            />
            <img
              :src="row.image"
              :alt="row.imageAlt"
              class="relative mx-auto w-full max-w-sm rounded-[20px]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            class="max-w-lg lg:max-w-none"
            :class="i % 2 === 1 ? 'lg:order-1' : ''"
          >
            <span
              v-if="row.badge"
              class="inline-block rounded-md bg-orange-500 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white"
            >
              {{ row.badge }}
            </span>
            <h3
              class="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              :class="row.badge ? 'mt-3' : ''"
            >
              {{ row.title }}
            </h3>
            <p class="mt-4 text-base leading-relaxed text-ink-muted">
              {{ row.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

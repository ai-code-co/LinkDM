<script setup lang="ts">
const route = useRoute()

const confirmationCode = computed(() => {
  const code = route.query.code
  return typeof code === 'string' ? code : ''
})

useSeoMeta({
  title: 'Data Deletion Status — Linkora',
  description: 'Check the status of your Facebook data deletion request for Linkora.',
})
</script>

<template>
  <section class="bg-canvas pb-16 pt-12">
    <div class="mx-auto max-w-2xl px-4 sm:px-6">
      <div class="rounded-2xl border border-edge bg-surface p-6 sm:p-8">
        <p class="text-xs font-semibold uppercase tracking-wider text-eyebrow">
          Data Deletion
        </p>
        <h1 class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Deletion request received
        </h1>
        <p class="mt-3 text-sm text-ink-muted sm:text-base">
          Your request to remove Facebook-related data from Linkora has been processed.
          Connected Facebook Pages, stored page tokens, and webhook subscriptions tied to
          your Facebook account have been removed from our systems.
        </p>
        <p
          v-if="confirmationCode"
          class="mt-5 rounded-xl border border-edge bg-canvas px-4 py-3 text-sm text-ink-muted"
        >
          <span class="font-semibold text-ink">Confirmation code:</span>
          <span class="ml-2 font-mono text-ink">{{ confirmationCode }}</span>
        </p>
        <p class="mt-4 text-sm text-ink-muted">
          This does not delete your Linkora account. To remove your full account or
          other data, contact us using the details in our
          <NuxtLink
            to="/privacy-policy"
            class="text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            Privacy Policy
          </NuxtLink>.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/"
            class="inline-flex rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand transition hover:bg-brand-hover"
          >
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

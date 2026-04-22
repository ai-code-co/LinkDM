<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div class="bg-canvas pb-16 pt-10 sm:pb-20 sm:pt-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <p class="text-xs font-bold uppercase tracking-wider text-eyebrow">
        Features
      </p>
      <h1 class="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Smart Channel Features
      </h1>
      <p class="mt-3 max-w-3xl text-sm text-ink-muted sm:text-base">
        Connect your social accounts and automate replies to comments and DMs with AI-powered flows.
      </p>

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          class="group rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
            Instagram
          </div>
          <h2 class="text-xl font-semibold text-ink">
            Instagram Automation
          </h2>

          <div class="mt-5 space-y-4">
            <div class="rounded-xl bg-white/80 p-4">
              <h3 class="text-sm font-semibold text-ink">
                Feature 1: Comment to DM
              </h3>
              <p class="mt-2 text-sm leading-6 text-ink-muted">
                When someone comments on your Instagram post, this feature automatically replies to the comment
                and sends a private DM.
              </p>
              <button
                type="button"
                class="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                connect for DM replies
              </button>
            </div>

            <div class="rounded-xl bg-white/80 p-4">
              <h3 class="text-sm font-semibold text-ink">
                Feature 2: DM Question Flow
              </h3>
              <p class="mt-2 text-sm leading-6 text-ink-muted">
                When someone sends a DM to your Instagram account, this feature automatically asks several
                questions.
              </p>
              <button
                type="button"
                class="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
              >
                connect for comment replies
              </button>
            </div>
          </div>
        </article>

        <article
          class="group rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            WhatsApp
          </div>
          <h2 class="text-xl font-semibold text-ink">
            WhatsApp DM Automation
          </h2>
          <p class="mt-4 text-sm leading-6 text-ink-muted">
            When someone sends a message to your WhatsApp number or account, this feature automatically asks
            several questions to the user.
          </p>

          <button
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            connect for DM replies
          </button>
        </article>

        <article
          class="group rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Facebook
          </div>
          <h2 class="text-xl font-semibold text-ink">
            Facebook DM Automation
          </h2>
          <p class="mt-4 text-sm leading-6 text-ink-muted">
            When someone sends a message to your Facebook account DM, this feature automatically asks several
            questions to the user.
          </p>

          <button
            type="button"
            class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            connect for DM replies
          </button>
        </article>
      </div>
    </div>
  </div>
</template>

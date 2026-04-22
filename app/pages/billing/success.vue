<template>
  <section class="bg-canvas pb-16 pt-12">
    <div class="mx-auto max-w-2xl px-4 sm:px-6">
      <div class="rounded-2xl border border-edge bg-surface p-6 sm:p-8">
        <p class="text-xs font-semibold uppercase tracking-wider text-eyebrow">
          Payment
        </p>
        <h1 class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          PayPal approval received
        </h1>
        <p class="mt-3 text-sm text-ink-muted sm:text-base">
          Your subscription approval has been submitted. It may take a short moment to sync after webhook confirmation.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink
            to="/settings"
            class="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand transition hover:bg-brand-hover"
          >
            Open Settings
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            class="rounded-xl bg-btn-muted px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-btn-muted-hover"
          >
            Back to Pricing
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

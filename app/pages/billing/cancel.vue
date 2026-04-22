<template>
  <section class="bg-canvas pb-16 pt-12">
    <div class="mx-auto max-w-2xl px-4 sm:px-6">
      <div class="rounded-2xl border border-edge bg-surface p-6 sm:p-8">
        <p class="text-xs font-semibold uppercase tracking-wider text-eyebrow">
          Payment
        </p>
        <h1 class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Checkout cancelled
        </h1>
        <p class="mt-3 text-sm text-ink-muted sm:text-base">
          No charge was made. You can return to pricing and try checkout again whenever you are ready.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/pricing"
            class="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand transition hover:bg-brand-hover"
          >
            Return to Pricing
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

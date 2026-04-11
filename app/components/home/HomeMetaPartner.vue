<script setup lang="ts">
const LOGO_SRC =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/6724df0acc687466b05295e6_3356c53608d8f2c29b6c5fd867ae4176_meta_partner_logo_linkdm.avif'
</script>

<template>
  <section class="bg-white py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <article
        class="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-colors duration-200 hover:border-[#1487fa] sm:p-10 lg:flex lg:items-center lg:gap-12 lg:p-12"
      >
        <div class="flex-1">
          <p class="text-xs font-semibold uppercase tracking-wider text-[#1487fa]">
            Badged partner
          </p>
          <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            LinkDM is a Meta Business Partner
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-relaxed text-gray-900">
            We&apos;ve been a certified Meta Business Partner since 2021, offering peace of mind
            to our 48,000+ users by ensuring complete compliance with automation standards across
            both Instagram and Facebook.
          </p>
        </div>
        <div
          class="mt-8 flex shrink-0 justify-center lg:mt-0 lg:justify-end"
        >
          <img
            :src="LOGO_SRC"
            alt="Meta Business Partners"
            class="h-auto w-full max-w-[220px] object-contain sm:max-w-[260px]"
            width="260"
            height="120"
            loading="lazy"
          />
        </div>
      </article>
    </div>
  </section>
</template>

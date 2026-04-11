<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '92', label: 'Average Open Rates*' },
  { value: '74', label: 'Average CTR*' },
  { value: '65', label: 'Increase Engagement*' },
]

const footnote = '*As of December 2025'
</script>

<template>
  <section
    class="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] py-14 sm:py-16"
    aria-label="LinkDM performance statistics"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <div class="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8 lg:gap-12">
        <div v-for="(stat, i) in stats" :key="i" class="flex flex-col items-center">
          <p class="flex items-start justify-center font-extrabold tracking-tight text-white">
            <span class="text-5xl leading-none sm:text-6xl lg:text-7xl">{{ stat.value }}</span>
            <span class="mt-1 text-2xl font-bold leading-none sm:mt-1.5 sm:text-3xl lg:text-4xl">%</span>
          </p>
          <p class="mt-3 text-base font-bold text-white sm:text-lg">
            {{ stat.label }}
          </p>
          <p class="mt-2 text-sm italic text-white/85">
            {{ footnote }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

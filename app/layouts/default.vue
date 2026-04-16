<template>
  <div
    class="flex min-h-screen flex-col bg-canvas font-sans text-ink antialiased transition-colors duration-200"
  >
    <AppHeader />
    <main class="flex-1 pt-16 sm:pt-[4.25rem]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

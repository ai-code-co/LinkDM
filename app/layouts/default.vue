<template>
  <div class="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased">
    <AppHeader />
    <main class="flex-1 pt-16 sm:pt-[4.25rem]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

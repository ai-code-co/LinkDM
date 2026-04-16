<script setup lang="ts">
const appBootstrapLoading = useState<boolean>('app-bootstrap-loading', () => true)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div
      v-if="appBootstrapLoading"
      class="flex min-h-screen items-center justify-center bg-canvas text-ink"
      role="status"
      aria-live="polite"
      aria-label="Loading application"
    >
      <div class="flex flex-col items-center gap-4">
        <span
          class="h-12 w-12 animate-spin rounded-full border-4 border-edge border-t-brand"
          aria-hidden="true"
        />
        <p class="text-sm font-medium text-ink-muted">
          Loading your preferences...
        </p>
      </div>
    </div>
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

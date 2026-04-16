<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const route = useRoute()

onMounted(async () => {
  await supabase.auth.getSession()
  if (user.value) {
    const next =
      typeof route.query.redirect === 'string' ? route.query.redirect : '/'
    await navigateTo(next)
  }
  else {
    await navigateTo('/login?error=session')
  }
})
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center px-4 py-12 text-ink-muted"
  >
    <p class="text-sm">Completing sign in…</p>
  </div>
</template>

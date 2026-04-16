export default defineNuxtPlugin(() => {
  const { setTheme, syncThemeFromProfile } = useTheme()
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()
  const appBootstrapLoading = useState<boolean>('app-bootstrap-loading', () => true)

  void (async () => {
    try {
      const { data } = await supabase.auth.getSession()
      const userId = data.session?.user?.id
      if (userId) {
        await syncThemeFromProfile(userId)
      } else {
        await setTheme('default', { syncProfile: false })
      }
    } finally {
      appBootstrapLoading.value = false
    }
  })()

  watch(
    () => (user.value as { sub?: string } | null)?.sub ?? null,
    async (userId) => {
      if (!userId) return
      await syncThemeFromProfile(userId)
    },
  )
})

export type ThemeId = 'default' | 'dark' | 'dawn' | 'midnight'

export const THEMES: {
  id: ThemeId
  name: string
  description: string
  scheme: 'light' | 'dark'
}[] = [
  {
    id: 'default',
    name: 'Classic',
    description: 'Original LinkDM look — clean white and blue.',
    scheme: 'light',
  },
  {
    id: 'dark',
    name: 'Obsidian',
    description: 'Deep slate surfaces with cool sky accents.',
    scheme: 'dark',
  },
  {
    id: 'dawn',
    name: 'Dawn',
    description: 'Warm paper tones and terracotta highlights.',
    scheme: 'light',
  },
  {
    id: 'midnight',
    name: 'Aurora',
    description: 'Indigo night with soft violet highlights.',
    scheme: 'dark',
  },
]

const THEME_IDS = new Set<ThemeId>(THEMES.map(theme => theme.id))

function toThemeId(value: string | null | undefined): ThemeId | null {
  if (!value) return null
  return THEME_IDS.has(value as ThemeId) ? (value as ThemeId) : null
}

function applyDomTheme(id: ThemeId) {
  if (!import.meta.client) return
  if (id === 'default') document.documentElement.removeAttribute('data-theme')
  else document.documentElement.setAttribute('data-theme', id)
}

async function saveThemeToProfile(theme: ThemeId) {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()
  const profiles = supabase.from('profiles') as any
  const claims = user.value as { sub?: string } | null
  const userId = claims?.sub
  if (!userId) return

  const { error } = await profiles
    .update({ theme })
    .eq('id', userId)

  if (error) {
    // Keep UX responsive even if profile sync fails.
    console.error('Failed to save theme to profile:', error.message)
  }
}

export function useTheme() {
  const theme = useState<ThemeId>('linkdm-theme', () => 'default')

  async function setTheme(id: ThemeId, options: { syncProfile?: boolean } = {}) {
    const { syncProfile = false } = options
    theme.value = id
    applyDomTheme(id)
    if (syncProfile) {
      await saveThemeToProfile(id)
    }
  }

  async function syncThemeFromProfile(userIdOverride?: string) {
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()
    const profiles = supabase.from('profiles') as any
    const claims = user.value as { sub?: string } | null
    const userId = userIdOverride ?? claims?.sub
    if (!userId) return

    const { data, error } = await profiles
      .select('theme')
      .eq('id', userId)
      .maybeSingle()

    if (error) {
      console.error('Failed to load theme from profile:', error.message)
      return
    }

    const profileTheme = toThemeId((data as { theme?: string | null } | null)?.theme)
    if (profileTheme && profileTheme !== theme.value) {
      await setTheme(profileTheme, { syncProfile: false })
    }
  }

  return { theme, setTheme, syncThemeFromProfile, THEMES }
}

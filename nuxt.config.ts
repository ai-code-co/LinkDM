// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  css: ['~/assets/css/themes.css'],

  srcDir: 'app/',
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
      paypalPlanProMonthly: process.env.NUXT_PUBLIC_PAYPAL_PLAN_PRO_MONTHLY || '',
      paypalPlanProYearly: process.env.NUXT_PUBLIC_PAYPAL_PLAN_PRO_YEARLY || '',
      paypalPlanPlatinumMonthly: process.env.NUXT_PUBLIC_PAYPAL_PLAN_PLAT_MONTHLY || '',
      paypalPlanPlatinumYearly: process.env.NUXT_PUBLIC_PAYPAL_PLAN_PLAT_YEARLY || '',
    },
  },
  supabase: {
    redirect: false,
    types: false,
    cookieOptions: {
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    },
  },
})
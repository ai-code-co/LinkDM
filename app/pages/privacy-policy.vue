<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — Linkora',
  description:
    'How Linkora collects, uses, and protects your information when you use our platform and Facebook Messenger automation.',
})
</script>

<template>
  <div class="bg-canvas transition-colors duration-200">
    <div class="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16">
      <header class="mb-10 border-b border-edge pb-8">
        <p class="text-sm font-semibold uppercase tracking-wide text-brand">
          Legal
        </p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p class="mt-3 text-sm text-ink-muted">
          Last updated: June 18, 2026
        </p>
      </header>

      <article class="space-y-10 text-ink-secondary">
        <section class="space-y-4">
          <p class="leading-relaxed text-ink-muted">
            This Privacy Policy describes how <strong class="text-ink">Linkora</strong>
            (“we”, “us”, or “our”) collects, uses, stores, and protects information when you
            use our website, create an account, connect integrations, or interact with
            Facebook Messenger automation powered by Linkora.
          </p>
          <p class="leading-relaxed text-ink-muted">
            By using Linkora or interacting with a Messenger chatbot operated through our
            platform, you agree to this Privacy Policy.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            1. Information We Collect
          </h2>

          <h3 class="text-base font-semibold text-ink">
            A. Linkora account holders
          </h3>
          <p class="leading-relaxed text-ink-muted">
            When you sign up for or use Linkora, we may collect:
          </p>
          <ul class="list-disc space-y-2 pl-6 text-ink-muted">
            <li>Name and business name (profile information)</li>
            <li>Email address and authentication credentials</li>
            <li>Subscription and billing status (via PayPal)</li>
            <li>App preferences (such as theme settings)</li>
            <li>Facebook Page connection details when you connect Messenger (Page ID, Page name, encrypted Page access token)</li>
          </ul>

          <h3 class="text-base font-semibold text-ink">
            B. Messenger users (people who message a connected Page)
          </h3>
          <p class="leading-relaxed text-ink-muted">
            When someone interacts with a Facebook Page that uses Linkora automation, we may
            receive data from Meta, including:
          </p>
          <ul class="list-disc space-y-2 pl-6 text-ink-muted">
            <li>Public profile information (such as name and Facebook user ID)</li>
            <li>Messages sent to the Page</li>
            <li>Button postbacks and quick-reply selections</li>
            <li>Message delivery and read events (where enabled)</li>
          </ul>
          <p class="leading-relaxed text-ink-muted">
            We do not intentionally collect sensitive personal data unless you explicitly
            provide it in a message (for example, email, phone number, or other details
            you choose to share during a conversation flow).
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            2. How We Use Information
          </h2>
          <p class="leading-relaxed text-ink-muted">
            We use collected information solely to:
          </p>
          <ul class="list-disc space-y-2 pl-6 text-ink-muted">
            <li>Provide and operate the Linkora platform</li>
            <li>Authenticate users and manage accounts</li>
            <li>Connect and manage Facebook Page integrations</li>
            <li>Receive Messenger webhooks and deliver automated replies</li>
            <li>Process subscriptions and payments</li>
            <li>Respond to support requests and improve our services</li>
            <li>Comply with legal obligations and platform policies</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            3. Facebook / Meta Integration
          </h2>
          <p class="leading-relaxed text-ink-muted">
            Linkora uses the Facebook Platform to enable Messenger automation. When a
            business connects their Facebook Page:
          </p>
          <ul class="list-disc space-y-2 pl-6 text-ink-muted">
            <li>We receive webhook events from Meta when users message the connected Page</li>
            <li>We use the Page access token to send replies on behalf of that Page</li>
            <li>Page tokens are stored in encrypted form in our database</li>
            <li>Each Linkora customer connects only Pages they administer</li>
          </ul>
          <p class="leading-relaxed text-ink-muted">
            Meta’s own data practices are governed by
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-link underline-offset-2 hover:text-link-hover hover:underline"
            >Meta’s Privacy Policy</a>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            4. Data Storage &amp; Retention
          </h2>
          <p class="leading-relaxed text-ink-muted">
            Linkora account data and Facebook connection metadata are stored securely using
            our cloud infrastructure (including Supabase). Messenger conversation data may
            be processed temporarily to deliver automation and may be stored by automation
            tools configured by the Page owner (such as workflow and database services).
          </p>
          <p class="leading-relaxed text-ink-muted">
            We retain information only as long as necessary to provide the service, comply
            with law, resolve disputes, and enforce our agreements. You may disconnect
            Facebook or delete your Linkora account to stop further collection through
            those channels.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            5. Data Sharing
          </h2>
          <p class="leading-relaxed text-ink-muted">
            We do not sell, trade, or rent your personal information.
          </p>
          <p class="leading-relaxed text-ink-muted">
            We may share information only:
          </p>
          <ul class="list-disc space-y-2 pl-6 text-ink-muted">
            <li>With service providers that help us operate Linkora (hosting, payments, automation)</li>
            <li>With Meta when required to send or receive Messenger communications</li>
            <li>When required by law, regulation, or valid legal process</li>
            <li>To protect the rights, safety, and security of Linkora, our users, or others</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            6. Third-Party Services
          </h2>
          <p class="leading-relaxed text-ink-muted">
            Our service integrates with third parties that process data under their own
            policies, including:
          </p>
          <ul class="list-disc space-y-2 pl-6 text-ink-muted">
            <li><strong class="text-ink">Meta (Facebook Messenger)</strong> — messaging platform</li>
            <li><strong class="text-ink">Supabase</strong> — authentication and database</li>
            <li><strong class="text-ink">PayPal</strong> — subscription payments</li>
            <li><strong class="text-ink">n8n and related automation tools</strong> — workflow processing</li>
            <li>Other tools configured by Page owners (e.g. SMS providers)</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            7. Security
          </h2>
          <p class="leading-relaxed text-ink-muted">
            We use reasonable technical and organizational measures to protect information,
            including encrypted storage of Facebook Page access tokens and verified webhook
            signatures from Meta. No method of transmission or storage is 100% secure.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            8. Your Rights
          </h2>
          <p class="leading-relaxed text-ink-muted">
            Depending on your location, you may have the right to:
          </p>
          <ul class="list-disc space-y-2 pl-6 text-ink-muted">
            <li>Access, correct, or delete your personal information</li>
            <li>Disconnect Facebook from your Linkora account</li>
            <li>Stop interacting with a Messenger chatbot at any time</li>
            <li>Request information about how your data is used</li>
          </ul>
          <p class="leading-relaxed text-ink-muted">
            To exercise these rights, contact us using the details below.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            9. Data Deletion
          </h2>
          <p class="leading-relaxed text-ink-muted">
            You may request deletion of your Linkora account data or Messenger-related data
            by emailing us. If you remove Linkora from your Facebook account settings and
            request data deletion through Facebook, we process that request automatically
            and provide a confirmation code on our
            <NuxtLink
              to="/data-deletion-status"
              class="text-link underline-offset-2 hover:text-link-hover hover:underline"
            >
              data deletion status page
            </NuxtLink>.
            We will process verified requests within a reasonable timeframe, subject to
            legal retention requirements.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            10. Contact Us
          </h2>
          <p class="leading-relaxed text-ink-muted">
            If you have questions about this Privacy Policy or our data practices, contact:
          </p>
          <p class="rounded-xl border border-edge bg-surface px-5 py-4 text-ink-muted">
            <strong class="text-ink">Email:</strong>
            <a
              href="mailto:rohit.excel2011@gmail.com"
              class="ml-1 text-link underline-offset-2 hover:text-link-hover hover:underline"
            >rohit.excel2011@gmail.com</a>
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold text-ink">
            11. Changes to This Policy
          </h2>
          <p class="leading-relaxed text-ink-muted">
            We may update this Privacy Policy from time to time. Changes will be posted on
            this page with an updated “Last updated” date. Continued use of Linkora after
            changes constitutes acceptance of the revised policy.
          </p>
        </section>
      </article>

      <div class="mt-12 flex flex-wrap items-center gap-6 border-t border-edge pt-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-sm font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
        >
          ← Back to home
        </NuxtLink>
        <NuxtLink
          to="/terms-of-service"
          class="inline-flex items-center text-sm font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
        >
          Terms of Service
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

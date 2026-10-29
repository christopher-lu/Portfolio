# Portfolio Web Analytics

## Purpose

Vercel Web Analytics provides private, aggregate traffic insights for
christopherlu.dev, including visitors, page views, popular pages,
referral sources, and general device information.

This integration is intended to help evaluate portfolio engagement
during an active job search.

## Implementation

- Provider: Vercel Web Analytics
- Framework: Next.js App Router
- Package: @vercel/analytics
- Integration: app/layout.tsx
- Reporting: Private Vercel project dashboard

The root layout renders one Analytics component. Page views are
collected through the provider's Next.js integration.

The website does not display a public visitor counter or analytics
dashboard.

## Setup

1. Open the Portfolio project in the Vercel dashboard.
2. Navigate to Analytics.
3. Enable Web Analytics.
4. Deploy the integration through the normal GitHub PR workflow.
5. Verify that the deployed website reports page views.
6. Review aggregate data in the Vercel Analytics dashboard.

## Pages to Monitor

- / — homepage traffic
- /projects — overall project interest
- /projects/didt — DIDT case-study interest
- /projects/klusterbud — KlusterBud case-study interest
- /experience — professional background
- /skills — technical skills

## Privacy and Scope

Vercel Web Analytics is cookie-free and stores anonymized visitor
data. No custom visitor identification, advertising pixels, or
session replay tools are included in this implementation.

This integration uses automatic page-view tracking only.

Traffic statistics cannot reliably identify individual recruiters,
employers, or the job application responsible for a visit.

## Verification

Run:

- npm run lint
- npm run build
- npm audit
- git diff --check

After deployment, confirm that Web Analytics is enabled and that page
views appear in the private Vercel dashboard.

Analytics collection is not retroactive.

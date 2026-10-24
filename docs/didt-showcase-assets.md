# DIDT portfolio media checklist

The DIDT detail page uses an accessible, responsive screenshot carousel when
`media.screenshots` is populated. Portrait screenshots use `object-contain` and
stay in a portrait frame: they are never stretched into the landscape hero.

The portfolio and home page project cards retain their existing single-cover
behavior. **Do not use a raw portrait mobile screenshot as a wide card cover.**
Add a separate approved landscape composition once real captures are available.

## Asset scaffold

From the Portfolio repository root:

```sh
mkdir -p public/images/projects/didt
mkdir -p public/videos/projects
```

Recommended assets:

- `public/images/projects/didt/mobile-today.webp`
- `public/images/projects/didt/mobile-habit-tracking.webp`
- `public/images/projects/didt/mobile-history.webp`
- `public/images/projects/didt/web-dashboard.webp` (when ready)
- `public/images/projects/didt/didt-cover.webp` (composed landscape cover)
- `public/videos/projects/didt-mobile-alpha.mp4`
- `public/images/projects/didt/demo-poster.webp` (optional)

These are proposed filenames, **not committed assets**.

## Enable the carousel

Only after capturing and placing the real files, update the DIDT `media` entry
in `data/projects.ts`:

```ts
media: {
  cover: "/images/projects/didt/didt-cover.webp",
  screenshots: [
    {
      src: "/images/projects/didt/mobile-today.webp",
      alt: "DIDT mobile Today dashboard displaying daily habits",
      platform: "mobile",
      caption: "Mobile alpha: backend-authoritative Today tracking",
    },
    {
      src: "/images/projects/didt/mobile-habit-tracking.webp",
      alt: "DIDT mobile quantitative habit tracking controls",
      platform: "mobile",
      caption: "Direct habit tracking and progress corrections",
    },
    {
      src: "/images/projects/didt/mobile-history.webp",
      alt: "DIDT mobile monthly habit history",
      platform: "mobile",
      caption: "Calendar history and progress",
    },
  ],
  demoVideo: "/videos/projects/didt-mobile-alpha.mp4",
  poster: "/images/projects/didt/demo-poster.webp",
},
```

Remove optional `cover`, `poster`, or `demoVideo` fields if their files have
not been supplied. `screenshots` may be omitted until the first real image is
available. Missing media is never referenced by default.

`components/project-detail/ProjectMediaGallery.tsx` controls the hero
carousel, while `ProjectDemoVideo.tsx` renders an optional video walkthrough
after the project overview. Neither renders duplicate gallery content.

## QA

- Use a dedicated fictional-data account for captures.
- Remove personal identifying information, credentials, and private URLs.
- Verify responsive sizes and both color themes.
- Test arrows, thumbnail buttons, keyboard arrow navigation, focus, and alt text.
- Ensure visual aspect ratios remain correct for portrait and desktop images.
- Confirm no requests for nonexistent assets.
- Keep private repository links disabled.
- Check Vercel preview against the intended branch and commit before merge.

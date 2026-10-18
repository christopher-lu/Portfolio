# DIDT portfolio media checklist

This update intentionally ships the alpha milestone narrative before adding
screenshots or a video. Do **not** reference missing assets in `data/projects.ts`.

## Planned files

Place approved, non-sensitive media in the Portfolio repository:

- `public/images/projects/didt/mobile-today.webp`
- `public/images/projects/didt/mobile-habit-tracking.webp`
- `public/images/projects/didt/mobile-history.webp`
- `public/images/projects/didt/web-dashboard.webp`
- `public/images/projects/didt/web-habits.webp`
- `public/videos/projects/didt-mobile-alpha.mp4`
- Optional demo poster: `public/images/projects/didt/demo-poster.webp`

These are naming conventions, **not files already committed**. The exact set can
change based on which screens are polished and safe to publish.

## Integration

After adding the files, update the DIDT `media` entry in `data/projects.ts`:

```ts
media: {
  cover: "/images/projects/didt/web-dashboard.webp",
  screenshots: [
    {
      src: "/images/projects/didt/mobile-today.webp",
      alt: "DIDT mobile alpha Today dashboard",
      platform: "mobile",
      caption: "Backend-authoritative Today and daily progress",
    },
    {
      src: "/images/projects/didt/web-dashboard.webp",
      alt: "DIDT web dashboard",
      platform: "web",
      caption: "The shared API powering the web client",
    },
  ],
  demoVideo: "/videos/projects/didt-mobile-alpha.mp4",
  poster: "/images/projects/didt/demo-poster.webp",
},
```

The portfolio renders the screenshot gallery and user-initiated video only when
those fields are supplied. Other project media is not changed by this work.

## Capture and publication

- Use a dedicated demo account with fictional, non-identifying habit data.
- Remove credentials, personal identifiers, API responses, debugging overlays,
  notifications, and private addresses from screenshots or screen recordings.
- Prefer exact application captures over mockups; label any concept designs.
- Crop and optimize media without obscuring relevant controls.
- Verify light/dark presentation, mobile responsive layout, keyboard behavior,
  image alt text, and video controls before publishing.
- Keep private source repositories disabled in `resources`.
- Verify preview deployment branch and commit before merging to production.

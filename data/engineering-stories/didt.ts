import type { EngineeringStory } from "@/types/engineering-story";

export const didtStory: EngineeringStory = {
  featured: true,

  summary:
    "A look at the engineering decisions behind DIDT: keeping habit tracking consistent across mobile and web, making progress easy to correct, and preserving accurate history as habits and goals change.",

  sections: [
    {
      id: "problem",
      type: "problem",
      title: "The Problem",
      body:
        "Daily check-ins should take seconds, but recurring schedules, missed days, changing goals, and accidental taps can make progress hard to trust. DIDT keeps the routine simple: see what's scheduled, log progress, correct mistakes, and review results over time.",
    },
    {
      id: "architecture",
      type: "architecture",
      title: "Cross-Platform Architecture",
      body:
        "DIDT uses a React Native and Expo mobile client and a Next.js web client, both connected to a NestJS REST API backed by Prisma and PostgreSQL. The backend manages authentication, habit lifecycle, schedule eligibility, tracking occurrences, and history. Both clients rely on the API to determine which habits apply on a given date instead of duplicating those rules.",
    },
    {
      id: "decisions",
      type: "decision",
      title: "Backend-Owned Tracking",
      body:
        "Each tracking occurrence represents one habit on one eligible calendar date. Users can undo check-off completions or adjust quantity-based progress. The occurrence stores a snapshot of its tracking settings, so changing a target or unit later does not rewrite earlier results. A stored user timezone keeps daily tracking and historical queries consistent across clients.",
    },
    {
      id: "history",
      type: "tradeoff",
      title: "Preserving Historical Accuracy",
      body:
        "A habit's current settings cannot always explain whether it was eligible on an earlier date. DIDT distinguishes recorded occurrences, known non-occurrences, and dates with insufficient historical information. Unknown dates are not treated as misses, and days with no eligible habits do not affect completion rates. This keeps history accurate when schedules or habits change.",
    },
    {
      id: "recovery",
      type: "challenge",
      title: "Habit Management and Recovery",
      body:
        "DIDT keeps active, archived, and recently deleted habits separate, with a 30-day window to restore deleted records. Undo and correction flows reconcile with the server's current state, helping interrupted requests recover without inventing progress or counting a completion twice.",
    },
    {
      id: "results",
      type: "results",
      title: "Validation and Reuse",
      body:
        "Functional and integration tests have validated the mobile app's daily tracking, history, and recovery workflows. The shared NestJS API also supports ongoing Next.js integration, allowing both clients to use the same tracking rules. The web app remains in development; this case study does not claim public adoption or production-scale performance.",
    },
    {
      id: "lessons",
      type: "lesson",
      title: "Engineering Lessons",
      body:
        "Keeping domain rules in the backend allows a second client to use the same scheduling and progress logic rather than implementing another source of truth. Key lessons include handling calendar dates consistently, making corrections reversible, preserving history through configuration changes, and testing the boundaries between the API and each client.",
    },
  ],
};

import type { EngineeringStory } from "@/types/engineering-story";

export const didtStory: EngineeringStory = {
  featured: true,

  summary:
    "From validated mobile alpha to a shared web experience: designing habit tracking around server-owned calendar truth, forgiving corrections, and recoverable data.",

  sections: [
    {
      id: "problem",
      type: "problem",
      title: "The Problem",
      body:
        "Daily habit tracking should take seconds, but recurring schedules, missed days, changing goals, and accidental taps can make progress feel unreliable. DIDT focuses on one simple loop: know what applies today, record it quickly, correct mistakes without penalty, and understand progress over time.",
    },
    {
      id: "architecture",
      type: "architecture",
      title: "Cross-Platform Architecture",
      body:
        "DIDT separates its React Native / Expo mobile client and Next.js web client from a shared NestJS REST API backed by Prisma and PostgreSQL. The backend owns authentication, habit lifecycle, schedule eligibility, occurrence identity, and tracking history. Clients render authoritative API responses rather than independently calculating which habits belong to a calendar day.",
    },
    {
      id: "decisions",
      type: "decision",
      title: "Backend-Owned Tracking",
      body:
        "A tracking occurrence represents one habit on one eligible calendar date. Completed Boolean habits can be undone; quantitative progress can be incremented, decremented, or corrected. Once an occurrence exists, its tracking configuration is snapshotted, so later edits to a target, unit, or schedule do not silently rewrite that day's history. The user's stored timezone keeps Today and historical queries consistent across clients.",
    },
    {
      id: "history",
      type: "tradeoff",
      title: "Historical Accuracy Over Convenient Guesses",
      body:
        "Older dates are not always reconstructable from today's habit configuration. DIDT distinguishes a known occurrence, a known non-occurrence, and an unknown historical state. Unknown dates are not counted as misses, and days without applicable habits remain neutral. This preserves honest completion rates even when a habit has been edited or its earlier lifecycle is incomplete.",
    },
    {
      id: "recovery",
      type: "challenge",
      title: "Forgiving Management and Recovery",
      body:
        "Habit management must support change without making tracking fragile. DIDT separates active, archived, and recently deleted records; deleted items can be restored during a 30-day recovery window. Undo and correction flows reconcile with server state, helping the UI recover from interrupted requests without inventing progress or double-counting completions.",
    },
    {
      id: "results",
      type: "results",
      title: "Alpha Milestones",
      body:
        "The mobile application reached its alpha launch milestone after extensive functional and integration validation. The shared backend is functional for both clients, and the Next.js application is approaching its matching alpha milestone. The project remains in active development; public release, usage growth, and production-scale performance claims are intentionally not presented as completed outcomes.",
    },
    {
      id: "lessons",
      type: "lesson",
      title: "Engineering Lessons",
      body:
        "Separating domain rules from presentation has made it possible to build mobile first and then introduce a web client without implementing a second source of truth. The most important design choices were not visual: stable calendar semantics, non-destructive recovery, explicit correction behavior, and meaningful tests at the API and client boundaries.",
    },
  ],
};

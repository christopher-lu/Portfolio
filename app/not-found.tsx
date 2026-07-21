import Link from "next/link";

import { HomeIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
          404
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              px-5
              py-3
              font-medium
              transition-all
              hover:-translate-y-0.5
              hover:border-[var(--foreground)]
              hover:shadow-[var(--shadow-md)]
            "
          >
            <HomeIcon className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
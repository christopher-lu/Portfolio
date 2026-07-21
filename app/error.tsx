"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  console.error(error);

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <ExclamationTriangleIcon className="mx-auto h-16 w-16 text-yellow-500" />

        <h1 className="mt-6 text-4xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-[var(--muted-foreground)]">
          An unexpected error occurred while rendering this page.
        </p>

        <button
          onClick={reset}
          className="
            mt-8
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
          Try Again
        </button>
      </div>
    </main>
  );
}
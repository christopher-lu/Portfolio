export default function Loading() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div
          className="
            h-12
            w-12
            animate-spin
            rounded-full
            border-4
            border-[var(--border)]
            border-t-[var(--foreground)]
          "
        />

        <p className="text-sm text-[var(--muted-foreground)]">
          Loading...
        </p>
      </div>
    </main>
  );
}
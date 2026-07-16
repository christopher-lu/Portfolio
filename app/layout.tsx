import "./globals.css";

import ThemeProvider from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/navigation/ThemeToggle";

export const metadata = {
  title: "Christopher Lu",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </header>

            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
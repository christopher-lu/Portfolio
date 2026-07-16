import "./globals.css";

import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
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
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
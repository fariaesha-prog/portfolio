"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

/**
 * App-wide client providers.
 *
 * `next-themes` is used only for the `class`/`dark` toggle that HeroUI's
 * theme tokens key off of. The theme defaults to dark and does not follow
 * the OS preference, per the project's design direction.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}

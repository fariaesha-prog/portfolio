import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as a different element, e.g. "header" or "main". Defaults to "div". */
  as?: ElementType;
}

/**
 * Horizontal max-width wrapper used inside every `Section`. Kept as a
 * Server Component since it has no interactivity of its own.
 */
export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
}

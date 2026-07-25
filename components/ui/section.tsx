import type { ElementType, ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  /** Anchor id, e.g. for the in-page nav / smooth-scroll links ("#about"). */
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Render as a different element than "section" when needed. */
  as?: ElementType;
  /** Set to false to skip the inner Container (e.g. for full-bleed sections). */
  withContainer?: boolean;
}

/**
 * Consistent vertical rhythm + width constraint for every page section
 * (Hero, About, Projects, etc.). A Server Component by default — sections
 * that need scroll-reveal animation wrap their own content in a Client
 * Component and can still use this for spacing.
 */
export function Section({
  children,
  id,
  className,
  containerClassName,
  as: Component = "section",
  withContainer = true,
}: SectionProps) {
  return (
    <Component id={id} className={cn("py-16 sm:py-24", className)}>
      {withContainer ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </Component>
  );
}

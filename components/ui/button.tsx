"use client";

import { Button as HeroButton, type ButtonProps as HeroButtonProps } from "@heroui/react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type ButtonProps = HeroButtonProps;

/**
 * Thin wrapper around HeroUI's `Button` that adds a shared press/hover
 * micro-interaction. All HeroUI props (`variant`, `size`, `fullWidth`,
 * `isDisabled`, `isPending`, `onPress`, ...) pass straight through.
 */
export function Button({ className, fullWidth, ...props }: ButtonProps) {
  return (
    <motion.span
      className={cn("inline-block", fullWidth && "block w-full")}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <HeroButton className={cn(fullWidth && "w-full", className)} fullWidth={fullWidth} {...props} />
    </motion.span>
  );
}

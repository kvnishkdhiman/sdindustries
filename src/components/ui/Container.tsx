"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Container({
  children,
  className,
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[90rem]",
    full: "max-w-full",
  };

  return (
    <div className={cn("mx-auto px-6 w-full", sizeClasses[size], className)}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "dark";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export function Section({
  children,
  className,
  variant = "default",
  padding = "lg",
}: SectionProps) {
  const variantClasses = {
    default: "bg-white",
    muted: "bg-[#F5F6F7]",
    dark: "bg-[#0B2A4A] text-white",
  };

  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-20",
    xl: "py-32",
  };

  return (
    <section className={cn(variantClasses[variant], paddingClasses[padding], className)}>
      <Container>{children}</Container>
    </section>
  );
}

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
}

export function Grid({
  children,
  className,
  cols = 1,
  gap = "md",
  responsive = true,
}: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  };

  const gapClasses = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <div
      className={cn(
        "grid",
        responsive ? colClasses[cols] : `grid-cols-${cols}`,
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
"use client";

import { BrandWordmark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";

interface BrandLoadingProps {
  label?: string;
  fullScreen?: boolean;
  className?: string;
}

export function BrandLoading({
  label = "Loading...",
  fullScreen = false,
  className,
}: BrandLoadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        fullScreen && "min-h-svh",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <BrandWordmark className="dc-brand-float h-12 w-auto max-w-[220px]" />
      <div className="h-1 w-28 overflow-hidden rounded-full bg-primary/15">
        <div className="dc-brand-shimmer h-full w-1/2 rounded-full bg-primary" />
      </div>
      {label ? (
        <p className="text-muted-foreground animate-pulse text-sm">{label}</p>
      ) : null}
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { roleIcons } from "@/lib/role-icons";
import type { UserRole } from "@/interface/entities";

interface RoleOption {
  value: UserRole;
  label: string;
}

interface RoleIconSelectProps {
  value: UserRole;
  options: RoleOption[];
  onChange: (value: UserRole) => void;
  className?: string;
}

export function RoleIconSelect({
  value,
  options,
  onChange,
  className,
}: RoleIconSelectProps) {
  return (
    <div
      className={cn(
        "grid gap-2",
        options.length === 2 && "grid-cols-2",
        options.length >= 3 && "grid-cols-3",
        options.length === 1 && "grid-cols-1",
        className,
      )}
      role="radiogroup"
    >
      {options.map((option) => {
        const Icon = roleIcons[option.value];
        const selected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex flex-col items-center justify-center gap-2 rounded-xl border px-3 py-4 text-center transition-all",
              "hover:border-primary/40 hover:bg-primary/5",
              "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
              selected
                ? "border-primary bg-primary/10 text-primary shadow-sm"
                : "border-border bg-background text-muted-foreground",
            )}
          >
            <span
              className={cn(
                "flex size-10 items-center justify-center rounded-full transition-colors",
                selected ? "bg-primary text-primary-foreground" : "bg-muted",
              )}
            >
              <Icon className="size-5" />
            </span>
            <span
              className={cn(
                "text-xs leading-tight font-medium",
                selected ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

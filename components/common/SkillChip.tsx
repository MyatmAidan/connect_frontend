"use client";

import Image from "next/image";
import type { Skill } from "@/interface/entities";
import { resolveMediaUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

export function SkillChip({
  skill,
  selected = false,
  className,
}: {
  skill: Skill;
  selected?: boolean;
  className?: string;
}) {
  const imageUrl = resolveMediaUrl(skill.image);

  return (
    <div
      className={cn(
        "inline-flex min-w-[4.75rem] flex-col items-center gap-1.5 rounded-lg border px-2 py-2 text-center",
        selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground",
        className,
      )}
    >
      {imageUrl ? (
        <span className="relative size-9 shrink-0 overflow-hidden rounded-md bg-muted">
          <Image src={imageUrl} alt={skill.name} fill className="object-cover" unoptimized />
        </span>
      ) : null}
      <span className="max-w-[5rem] text-xs leading-tight font-medium break-words">
        {skill.name}
      </span>
    </div>
  );
}

"use client";

import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Skill } from "@/interface/entities";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

export function SkillPicker({
  skills,
  selectedIds,
  onChange,
  loading = false,
}: {
  skills: Skill[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  loading?: boolean;
}) {
  const { t } = useTranslation();

  const groupedSkills = useMemo(() => {
    const groups = new Map<string, Skill[]>();

    skills.forEach((skill) => {
      const label = skill.category?.name ?? t("profiles.otherSkills");
      const current = groups.get(label) ?? [];
      current.push(skill);
      groups.set(label, current);
    });

    return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [skills, t]);

  const toggleSkill = (id: string) => {
    onChange(
      selectedIds.includes(id)
        ? selectedIds.filter((skillId) => skillId !== id)
        : [...selectedIds, id],
    );
  };

  if (loading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-4 w-24" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-7 w-20 rounded-full" />
          ))}
        </div>
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">{t("profiles.noSkillsAvailable")}</p>
    );
  }

  return (
    <div className="space-y-4">
      {groupedSkills.map(([categoryName, categorySkills]) => (
        <div key={categoryName} className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
            {categoryName}
          </p>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill) => {
              const selected = selectedIds.includes(skill.id);
              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => toggleSkill(skill.id)}
                  className={cn(
                    "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    !selected && "opacity-80 hover:opacity-100",
                  )}
                >
                  <Badge
                    variant={selected ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer px-3 py-1 text-sm transition-colors",
                      !selected && "hover:bg-muted",
                    )}
                  >
                    {skill.name}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

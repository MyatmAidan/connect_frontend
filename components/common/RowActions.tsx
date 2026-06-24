"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/common/ButtonLink";
import { useTranslation } from "@/hooks/useTranslation";

export function RowActions({
  viewHref,
  editHref,
  onDelete,
}: {
  viewHref?: string;
  editHref?: string;
  onDelete?: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      {viewHref && (
        <ButtonLink
          href={viewHref}
          variant="ghost"
          size="icon-sm"
          aria-label={t("common.actions.view")}
          title={t("common.actions.view")}
        >
          <Eye className="size-4" />
        </ButtonLink>
      )}
      {editHref && (
        <ButtonLink
          href={editHref}
          variant="ghost"
          size="icon-sm"
          aria-label={t("common.actions.edit")}
          title={t("common.actions.edit")}
        >
          <Pencil className="size-4" />
        </ButtonLink>
      )}
      {onDelete && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onDelete}
          aria-label={t("common.actions.delete")}
          title={t("common.actions.delete")}
        >
          <Trash2 className="text-destructive size-4" />
        </Button>
      )}
    </div>
  );
}

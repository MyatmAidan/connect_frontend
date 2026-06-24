import { Plus } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";

export function PageHeader({
  title,
  description,
  createHref,
  createLabel,
  actions,
}: {
  title: string;
  description?: string;
  createHref?: string;
  createLabel?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {actions}
        {createHref && createLabel && (
          <ButtonLink href={createHref}>
            <Plus className="size-4" />
            {createLabel}
          </ButtonLink>
        )}
      </div>
    </div>
  );
}

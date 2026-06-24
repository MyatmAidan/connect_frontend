"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Eye, GripVertical, ImageIcon, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteEventApi, getEventsApi, reorderEventsApi } from "@/api/events";
import { ConfirmDialog, PageHeader } from "@/components/common";
import { Button } from "@/components/ui/button";
import type { Event } from "@/interface/entities";
import { formatDate } from "@/lib/date";
import { localePath } from "@/lib/locale-path";
import { resolveMediaUrl } from "@/lib/media";
import { useTranslation } from "@/hooks/useTranslation";

interface EventsSortableListProps {
  locale: string;
}

export function EventsSortableList({ locale }: EventsSortableListProps) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [items, setItems] = useState<Event[]>([]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Event | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["events", "sortable"],
    queryFn: () => getEventsApi({ page: 1, per_page: 100 }),
  });

  useEffect(() => {
    if (data?.data) {
      setItems(data.data);
    }
  }, [data?.data]);

  const persistOrder = useCallback(async (ordered: Event[]) => {
    setSavingOrder(true);
    try {
      await reorderEventsApi(ordered.map((event) => event.id));
      await queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success(t("events.orderSaved"));
    } catch {
      toast.error(t("events.orderSaveFailed"));
    } finally {
      setSavingOrder(false);
    }
  }, [queryClient, t]);

  const handleDrop = useCallback(
    (targetIndex: number) => {
      if (dragIndex === null || dragIndex === targetIndex) {
        setDragIndex(null);
        return;
      }

      const next = [...items];
      const [moved] = next.splice(dragIndex, 1);
      next.splice(targetIndex, 0, moved);
      setItems(next);
      setDragIndex(null);
      void persistOrder(next);
    },
    [dragIndex, items, persistOrder],
  );

  const handleDelete = useCallback(async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteEventApi(deleteTarget.id);
      toast.success(t("events.deleted"));
      setDeleteTarget(null);
      await queryClient.invalidateQueries({ queryKey: ["events"] });
    } catch {
      toast.error(t("events.deleteFailed"));
    } finally {
      setDeleting(false);
    }
  }, [deleteTarget, queryClient, t]);

  return (
    <div>
      <PageHeader
        title={t("menu.events")}
        createHref={localePath(locale, "/events/create")}
        createLabel={t("events.create")}
      />

      <p className="text-muted-foreground mb-4 text-sm">{t("events.dragOrderHint")}</p>

      {isLoading ? (
        <p className="text-muted-foreground text-sm">{t("common.loading")}</p>
      ) : null}

      {!isLoading && items.length === 0 ? (
        <p className="text-muted-foreground text-sm">{t("events.noEvents")}</p>
      ) : null}

      <ul className="space-y-2">
        {items.map((event, index) => {
          const photoUrl = resolveMediaUrl(event.photo);
          return (
            <li
              key={event.id}
              draggable
              onDragStart={() => setDragIndex(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className={`flex items-center gap-3 rounded-xl border bg-card p-3 shadow-sm transition-opacity ${
                dragIndex === index ? "opacity-60" : ""
              } ${savingOrder ? "pointer-events-none opacity-80" : ""}`}
            >
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing"
                aria-label={t("events.dragHandle")}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <GripVertical className="size-5" />
              </button>

              <div className="bg-muted relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border">
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="text-muted-foreground flex h-full w-full items-center justify-center">
                    <ImageIcon className="size-6" />
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{event.title}</p>
                <p className="text-muted-foreground truncate text-sm">
                  {event.section}
                  {event.event_date ? ` · ${formatDate(event.event_date, "PP")}` : ""}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <Link
                  href={localePath(locale, `/events/${event.id}`)}
                  aria-label={t("common.view")}
                  className="text-muted-foreground hover:text-foreground inline-flex size-9 items-center justify-center rounded-md hover:bg-accent"
                >
                  <Eye className="size-4" />
                </Link>
                <Link
                  href={localePath(locale, `/events/${event.id}/edit`)}
                  aria-label={t("common.edit")}
                  className="text-muted-foreground hover:text-foreground inline-flex size-9 items-center justify-center rounded-md hover:bg-accent"
                >
                  <Pencil className="size-4" />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDeleteTarget(event)}
                  aria-label={t("common.delete")}
                >
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        title={t("events.deleteTitle")}
        description={t("events.deleteDescription")}
        confirmText={t("common.delete")}
        variant="destructive"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </div>
  );
}

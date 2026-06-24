"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { EventInput } from "@/api/events";
import { resolveMediaUrl } from "@/lib/media";
import { useTranslation } from "@/hooks/useTranslation";

interface EventFormProps {
  defaultValues?: Partial<EventInput>;
  existingPhotoUrl?: string | null;
  onSubmit: (values: EventInput) => void;
  isPending?: boolean;
  submitLabel: string;
}

export function EventForm({ defaultValues, existingPhotoUrl, onSubmit, isPending, submitLabel }: EventFormProps) {
  const { t } = useTranslation();
  const [title, setTitle] = useState(defaultValues?.title ?? "");
  const [section, setSection] = useState(defaultValues?.section ?? "");
  const [eventDate, setEventDate] = useState(defaultValues?.event_date ?? "");
  const [meetingUrl, setMeetingUrl] = useState(defaultValues?.meeting_url ?? "");
  const [photo, setPhoto] = useState<File | null>(null);
  const previewUrl = photo ? URL.createObjectURL(photo) : resolveMediaUrl(existingPhotoUrl);

  return (
    <form
      className="mx-auto max-w-xl space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title,
          section,
          event_date: eventDate,
          meeting_url: meetingUrl || null,
          photo,
        });
      }}
    >
      <div className="space-y-2">
        <Label htmlFor="title">{t("events.eventTitle")}</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="section">{t("events.section")}</Label>
        <Input id="section" value={section} onChange={(e) => setSection(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="event_date">{t("events.eventDate")}</Label>
        <Input
          id="event_date"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="meeting_url">{t("events.meetingUrl")}</Label>
        <Input id="meeting_url" type="url" value={meetingUrl} onChange={(e) => setMeetingUrl(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="photo">{t("events.photo")}</Label>
        {previewUrl ? (
          <div className="relative mb-2 h-44 w-full max-w-xs overflow-hidden rounded-2xl border bg-muted/30">
            <Image src={previewUrl} alt={title || t("events.photo")} fill className="object-contain p-2" unoptimized />
          </div>
        ) : null}
        <Input
          id="photo"
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
        />
      </div>
      <Button type="submit" disabled={isPending}>
        {submitLabel}
      </Button>
    </form>
  );
}

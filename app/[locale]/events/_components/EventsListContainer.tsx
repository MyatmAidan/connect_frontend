"use client";

import { useParams } from "next/navigation";
import { EventsSortableList } from "./EventsSortableList";

export function EventsListContainer() {
  const { locale } = useParams<{ locale: string }>();

  return <EventsSortableList locale={locale} />;
}

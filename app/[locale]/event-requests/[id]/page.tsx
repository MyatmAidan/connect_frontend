import { EventRequestDetailClient } from "./_components/EventRequestDetailClient";

export default async function EventRequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EventRequestDetailClient id={id} />;
}

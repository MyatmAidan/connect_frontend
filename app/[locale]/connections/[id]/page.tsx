import { ConnectionDetailClient } from "./_components/ConnectionDetailClient";

export default async function ConnectionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <ConnectionDetailClient id={id} />;
}

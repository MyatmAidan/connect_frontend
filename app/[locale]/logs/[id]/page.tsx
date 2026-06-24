import { LogDetailClient } from "./_components/LogDetailClient";

export default async function LogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <LogDetailClient id={id} />;
}

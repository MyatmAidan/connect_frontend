import { ReportDetailClient } from "./_components/ReportDetailClient";

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <ReportDetailClient id={id} />;
}

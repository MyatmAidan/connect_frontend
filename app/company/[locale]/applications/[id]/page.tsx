import { CompanyApplicationDetail } from "../../_components/CompanyApplicationDetail";

export default async function CompanyApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CompanyApplicationDetail id={id} />;
}

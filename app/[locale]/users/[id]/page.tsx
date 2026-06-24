import { UserDetailClient } from "./_components/UserDetailClient";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <UserDetailClient id={id} />;
}

import { ProfileDetailClient } from "./_components/ProfileDetailClient";

export default async function ProfileDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <ProfileDetailClient id={id} />;
}

import { ProfileEditForm } from "./_components/ProfileEditForm";

export default async function ProfileEditPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <ProfileEditForm id={id} />;
}

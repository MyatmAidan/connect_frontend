import { UserEditForm } from "./_components/UserEditForm";

export default async function UserEditPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <UserEditForm id={id} />;
}

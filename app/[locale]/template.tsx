import { PageTransition } from "@/components/common/PageTransition";

export default function LocaleTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}

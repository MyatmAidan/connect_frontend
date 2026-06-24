import type { ComponentProps } from "react";
import { PortalLoginForm } from "@/components/portal-login-form";

export function CompanyLoginForm(
  props: Omit<ComponentProps<typeof PortalLoginForm>, "defaultMode">,
) {
  return <PortalLoginForm defaultMode="company" {...props} />;
}

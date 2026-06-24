import { PortalLoginForm } from "@/components/portal-login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[linear-gradient(160deg,oklch(0.97_0.02_238)_0%,var(--background)_45%,var(--background)_100%)] p-6 md:p-10 dark:bg-[linear-gradient(160deg,oklch(0.17_0.01_248)_0%,var(--background)_50%,var(--background)_100%)]">
      <div className="w-full max-w-md">
        <PortalLoginForm defaultMode="admin" />
      </div>
    </div>
  );
}

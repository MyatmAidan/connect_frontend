"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginSchema, type LoginFormValues } from "@/schemas/loginSchema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/hooks/useAuthMutations";
import { useCompanyLoginMutation } from "@/hooks/useCompanyAuthMutations";
import { useTranslation } from "@/hooks/useTranslation";
import type { ApiAxiosError, ApiValidationErrors } from "@/interface/common";
import { BrandLogo } from "@/components/brand/brand-mark";

export type PortalLoginMode = "admin" | "company";

interface PortalLoginFormProps extends React.ComponentProps<"div"> {
  defaultMode?: PortalLoginMode;
}

export function PortalLoginForm({
  className,
  defaultMode = "admin",
  ...props
}: PortalLoginFormProps) {
  const { locale = "en" } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [mode, setMode] = useState<PortalLoginMode>(defaultMode);

  const { mutate: adminLogin, isPending: adminPending } = useLoginMutation();
  const { mutate: companyLogin, isPending: companyPending } = useCompanyLoginMutation();
  const isPending = mode === "admin" ? adminPending : companyPending;
  const isCompany = mode === "company";

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  const handleModeSwitch = (next: PortalLoginMode) => {
    if (next === mode) return;
    setMode(next);
    form.reset({ email: "", password: "" });
    form.clearErrors();
  };

  const handleError = (error: unknown) => {
    const axiosError = error as ApiAxiosError;
    const status = axiosError.response?.status;
    const data = axiosError.response?.data;
    const errors = data?.errors as ApiValidationErrors | undefined;

    if (status === 422 && errors) {
      Object.entries(errors).forEach(([field, messages]) => {
        const message = Array.isArray(messages) ? messages[0] : messages;
        if (message && field in form.getValues()) {
          form.setError(field as keyof LoginFormValues, {
            type: "server",
            message,
          });
        }
      });
      return;
    }

    if (status === 401) {
      toast.error(t("auth.invalidCredentials"));
      return;
    }

    if (status === 403) {
      toast.error(data?.message || t("auth.unauthorized"));
      return;
    }

    toast.error(data?.message || t("auth.unexpectedError"));
  };

  const onSubmit = (values: LoginFormValues) => {
    form.clearErrors();
    if (mode === "admin") {
      adminLogin(values, { onError: handleError });
    } else {
      companyLogin(values, { onError: handleError });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent className="p-6 md:p-8">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <BrandLogo className="h-14 w-auto max-w-full" />
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {t("auth.welcome")}
                </h1>
                <p className="text-muted-foreground text-sm">
                  {t("auth.portalSubtitle")}
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1"
              role="tablist"
              aria-label="Sign in as"
            >
              <button
                type="button"
                role="tab"
                aria-selected={mode === "admin"}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  mode === "admin"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => handleModeSwitch("admin")}
              >
                Admin
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "company"}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  mode === "company"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => handleModeSwitch("company")}
              >
                Company
              </button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("auth.emailPlaceholder")}
                autoComplete="email"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-destructive text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t("auth.password")}</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <p className="text-destructive text-sm">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant={isCompany ? "secondary" : "default"}
              className="w-full transition-transform active:scale-[0.98]"
              disabled={isPending}
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  {t("common.loading")}
                </span>
              ) : (
                t("auth.login")
              )}
            </Button>

            {isCompany ? (
              <p className="text-center text-sm text-muted-foreground">
                {t("company.auth.noAccount")}{" "}
                <Link
                  href={`/company/${locale}/register`}
                  className="text-primary underline"
                >
                  {t("company.auth.register")}
                </Link>
              </p>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

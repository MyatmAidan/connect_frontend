"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { companyRegisterApi } from "@/api/company-auth";
import { useCompanyAuthStore } from "@/store/company-auth-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/useTranslation";
import { BrandLogo } from "@/components/brand/brand-mark";

export function CompanyRegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const login = useCompanyAuthStore((s) => s.login);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    company_name: "",
    description: "",
    location: "",
    industry: "",
    contact_phone: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await companyRegisterApi(form);
      login(data.company, data.token);
      toast.success(t("company.auth.registerSuccess"));
      router.replace(`/company/${locale}/dashboard`);
    } catch {
      toast.error(t("company.auth.registerFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent className="p-6 md:p-8">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-3 text-center">
              <BrandLogo className="h-12 max-w-full" />
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {t("company.auth.registerTitle")}
                </h1>
                <p className="text-muted-foreground text-sm">
                  {t("company.auth.registerSubtitle")}
                </p>
              </div>
            </div>

            {(["name", "email", "company_name", "location", "industry", "contact_phone"] as const).map((field) => (
              <div key={field} className="space-y-2">
                <Label htmlFor={field}>{field.replace(/_/g, " ")}</Label>
                <Input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                  required={["name", "email", "company_name"].includes(field)}
                />
              </div>
            ))}

            <div className="space-y-2">
              <Label htmlFor="description">{t("company.profile.description")}</Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password">{t("auth.password")}</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password_confirmation">{t("company.auth.confirmPassword")}</Label>
                <Input
                  id="password_confirmation"
                  type="password"
                  value={form.password_confirmation}
                  onChange={(e) => setForm((p) => ({ ...p, password_confirmation: e.target.value }))}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full transition-transform active:scale-[0.98]"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  {t("common.loading")}
                </span>
              ) : (
                t("company.auth.register")
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {t("company.auth.hasAccount")}{" "}
              <Link href={`/company/${locale}/login`} className="text-primary underline">
                {t("auth.login")}
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

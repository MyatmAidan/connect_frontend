"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { companyApi } from "@/api/company-api";
import type { ApiSuccessResponse } from "@/interface/common";
import type { CompanyProfile } from "@/interface/entities";
import { CompanyBackButton } from "@/components/company/CompanyBackButton";
import { companyLocalePath } from "@/lib/company-locale-path";
import { useCompanyAuthStore } from "@/store/company-auth-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/useTranslation";
import { useParams } from "next/navigation";

const PROFILE_FIELDS = [
  "company_name",
  "description",
  "website",
  "location",
  "industry",
  "contact_email",
  "contact_phone",
] as const;

const PROFILE_FIELD_LABELS: Record<(typeof PROFILE_FIELDS)[number], string> = {
  company_name: "company.profile.companyName",
  description: "company.profile.description",
  website: "company.profile.website",
  location: "company.profile.location",
  industry: "company.profile.industry",
  contact_email: "company.profile.contactEmail",
  contact_phone: "company.profile.contactPhone",
};

export function CompanyProfileForm() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const setCompany = useCompanyAuthStore((s) => s.setCompany);
  const company = useCompanyAuthStore((s) => s.company);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company_name: "",
    description: "",
    website: "",
    location: "",
    industry: "",
    contact_email: "",
    contact_phone: "",
  });

  useEffect(() => {
    if (!company) return;
    setForm({
      company_name: company.company_name ?? "",
      description: company.description ?? "",
      website: company.website ?? "",
      location: company.location ?? "",
      industry: company.industry ?? "",
      contact_email: company.contact_email ?? "",
      contact_phone: company.contact_phone ?? "",
    });
  }, [company]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await companyApi.put<ApiSuccessResponse<CompanyProfile>>("/profile", form);
      const body = result as unknown as ApiSuccessResponse<CompanyProfile>;
      setCompany(body.data);
      toast.success(t("company.profile.updated"));
    } catch {
      toast.error(t("company.profile.updateFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <CompanyBackButton href={companyLocalePath(locale, "/dashboard")} />
      <h1 className="text-2xl font-bold">{t("company.menu.profile")}</h1>
      <Card>
      <CardContent className="pt-6">
        <form onSubmit={onSubmit} className="space-y-4">
          {PROFILE_FIELDS.map((key) => (
            <div key={key} className="space-y-2">
              <Label>{t(PROFILE_FIELD_LABELS[key])}</Label>
              {key === "description" ? (
                <Textarea
                  value={form[key]}
                  onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                />
              ) : (
                <Input
                  value={form[key]}
                  onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                />
              )}
            </div>
          ))}
          <Button type="submit" disabled={loading}>{loading ? "..." : t("common.save")}</Button>
        </form>
      </CardContent>
    </Card>
    </div>
  );
}

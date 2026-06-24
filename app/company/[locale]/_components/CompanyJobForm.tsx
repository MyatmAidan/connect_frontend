"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { createCompanyJobApi } from "@/api/company-jobs";
import { getCompanyCategoriesApi } from "@/api/company-categories";
import { CompanyBackButton } from "@/components/company/CompanyBackButton";
import { companyLocalePath } from "@/lib/company-locale-path";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "@/hooks/useTranslation";

const EMPLOYMENT_TYPES = [
  { value: "full_time", label: "Full-time" },
  { value: "part_time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
  { value: "remote", label: "Remote" },
];

const EXPERIENCE_LEVELS = [
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid-level" },
  { value: "senior", label: "Senior" },
  { value: "lead", label: "Lead / Principal" },
];

export function CompanyJobForm() {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    requirements: "",
    category_id: "",
    employment_type: "full_time",
    experience_level: "",
    location: "",
    salary_min: "",
    salary_max: "",
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["company-categories"],
    queryFn: getCompanyCategoriesApi,
    staleTime: 1000 * 60 * 10,
  });

  const set = (key: string) => (value: string) =>
    setForm((p) => ({ ...p, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createCompanyJobApi({
        title: form.title,
        description: form.description,
        requirements: form.requirements || undefined,
        category_id: form.category_id || null,
        employment_type: form.employment_type,
        experience_level: form.experience_level || null,
        location: form.location || undefined,
        salary_min: form.salary_min ? Number(form.salary_min) : undefined,
        salary_max: form.salary_max ? Number(form.salary_max) : undefined,
      });
      toast.success(t("company.jobs.created"));
      router.replace(companyLocalePath(locale, "/jobs"));
    } catch {
      toast.error(t("company.jobs.createFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <CompanyBackButton href={companyLocalePath(locale, "/jobs")} />
      <h1 className="text-2xl font-bold">{t("company.jobs.create")}</h1>
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label>{t("company.jobs.title")}</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t("company.jobs.description")}</Label>
              <Textarea
                rows={4}
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t("company.jobs.requirements")}</Label>
              <Textarea
                rows={3}
                value={form.requirements}
                onChange={(e) => setForm((p) => ({ ...p, requirements: e.target.value }))}
              />
            </div>

            {/* Category + Experience Level */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{t("company.jobs.category")}</Label>
                <Select value={form.category_id || "none"} onValueChange={(v) => set("category_id")(v === "none" ? "" : v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("company.jobs.selectCategory")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">{t("common.none")}</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name_en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t("company.jobs.experienceLevel")}</Label>
                <Select value={form.experience_level || "none"} onValueChange={(v) => set("experience_level")(v === "none" ? "" : v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("company.jobs.selectLevel")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">{t("common.none")}</SelectItem>
                    {EXPERIENCE_LEVELS.map((lvl) => (
                      <SelectItem key={lvl.value} value={lvl.value}>
                        {lvl.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Employment Type + Location */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{t("company.jobs.employmentType")}</Label>
                <Select value={form.employment_type} onValueChange={set("employment_type")}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {EMPLOYMENT_TYPES.map((et) => (
                      <SelectItem key={et.value} value={et.value}>
                        {et.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t("company.jobs.location")}</Label>
                <Input
                  value={form.location}
                  onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
                />
              </div>
            </div>

            {/* Salary */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{t("company.jobs.salaryMin")}</Label>
                <Input
                  type="number"
                  min={0}
                  value={form.salary_min}
                  onChange={(e) => setForm((p) => ({ ...p, salary_min: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>{t("company.jobs.salaryMax")}</Label>
                <Input
                  type="number"
                  min={0}
                  value={form.salary_max}
                  onChange={(e) => setForm((p) => ({ ...p, salary_max: e.target.value }))}
                />
              </div>
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "..." : t("common.save")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

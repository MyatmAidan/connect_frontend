"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getCompanyApplicationApi,
  sendInterviewAcknowledgmentApi,
  updateApplicationStatusApi,
} from "@/api/company-applications";
import type { JobApplication } from "@/interface/entities";
import { CompanyBackButton } from "@/components/company/CompanyBackButton";
import { companyLocalePath } from "@/lib/company-locale-path";
import { resolveMediaUrl } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/useTranslation";
import { useParams } from "next/navigation";

export function CompanyApplicationDetail({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const defaultAckMessage = t("company.applications.interviewAckMessage");
  const [application, setApplication] = useState<JobApplication | null>(null);
  const [notes, setNotes] = useState("");
  const [ackMessage, setAckMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sendingAck, setSendingAck] = useState(false);

  useEffect(() => {
    setAckMessage(defaultAckMessage);
  }, [defaultAckMessage]);

  useEffect(() => {
    void getCompanyApplicationApi(id)
      .then((data) => {
        setApplication(data);
        setNotes(data.company_notes ?? "");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const updateStatus = async (status: string) => {
    setSaving(true);
    try {
      const updated = await updateApplicationStatusApi(id, { status, company_notes: notes });
      setApplication(updated);
      toast.success(t("company.applications.updated"));
    } catch {
      toast.error(t("company.applications.updateFailed"));
    } finally {
      setSaving(false);
    }
  };

  const sendInterviewAck = async () => {
    setSendingAck(true);
    try {
      const updated = await sendInterviewAcknowledgmentApi(id, ackMessage.trim());
      setApplication(updated);
      toast.success(t("company.applications.ackSent"));
    } catch {
      toast.error(t("company.applications.ackFailed"));
    } finally {
      setSendingAck(false);
    }
  };

  if (loading) return <div>{t("common.loading")}</div>;
  if (!application) return <div>{t("common.notFound")}</div>;

  const profile = application.applicant?.developer_profile;
  const cvUrl = profile?.cv_path ? resolveMediaUrl(profile.cv_path) : null;
  const telegramLinked = !!application.applicant?.telegram_linked_at;
  const ackSent = !!application.interview_ack_sent_at;

  return (
    <div className="space-y-4">
      <CompanyBackButton href={companyLocalePath(locale, "/applications")} />
      <h1 className="text-2xl font-bold">{t("company.applications.detail")}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{application.applicant?.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p><strong>{t("company.jobs.title")}:</strong> {application.job?.title}</p>
          <p><strong>{t("company.applications.status")}:</strong> {application.status}</p>
          <p><strong>{t("company.applications.phone")}:</strong> {profile?.phone ?? "—"}</p>
          <p>
            <strong>{t("company.applications.telegram")}:</strong>{" "}
            {telegramLinked
              ? `@${application.applicant?.telegram_username ?? "connected"}`
              : t("company.applications.telegramNotLinked")}
          </p>
          <p><strong>{t("profiles.category")}:</strong> {profile?.category?.name_en ?? "—"}</p>
          <p><strong>{t("company.applications.experience")}:</strong> {profile?.experience_level ?? "—"}</p>
          {application.cover_letter ? (
            <p><strong>{t("company.applications.coverLetter")}:</strong> {application.cover_letter}</p>
          ) : null}
          {cvUrl ? (
            <a href={cvUrl} target="_blank" rel="noreferrer" className="text-primary underline">
              {profile?.cv_original_name ?? "Download CV"}
            </a>
          ) : null}
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t("company.applications.notes")}
          />
          <div className="rounded-lg border bg-muted/40 p-4 space-y-3">
            <p className="font-medium">{t("company.applications.interviewAckTitle")}</p>
            <p className="text-muted-foreground text-xs">
              {t("company.applications.interviewAckHint")}
            </p>
            <Textarea
              value={ackMessage}
              onChange={(e) => setAckMessage(e.target.value)}
              disabled={ackSent}
              rows={4}
            />
            <p className="text-muted-foreground text-xs">
              {t("company.applications.interviewAckPreview", {
                message: ackMessage.trim() || defaultAckMessage,
              })}
            </p>
            <Button
              disabled={sendingAck || ackSent || !telegramLinked || !ackMessage.trim()}
              onClick={() => void sendInterviewAck()}
            >
              {ackSent
                ? t("company.applications.ackAlreadySent")
                : t("company.applications.sendInterviewAck")}
            </Button>
            {!telegramLinked ? (
              <p className="text-destructive text-xs">{t("company.applications.telegramRequired")}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {(["reviewed", "shortlisted", "accepted", "rejected"] as const).map((status) => (
              <Button key={status} size="sm" variant="outline" disabled={saving} onClick={() => void updateStatus(status)}>
                {status}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

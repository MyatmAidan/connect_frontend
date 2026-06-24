import type { UseFormReturn, FieldValues, Path } from "react-hook-form";
import type { ApiAxiosError } from "@/interface/common";
import { toast } from "sonner";
import i18n from "@/i18n/config";

export function handleApiError<T extends FieldValues>(
  error: unknown,
  form?: UseFormReturn<T>,
  fallbackMessage = i18n.t("auth.unexpectedError"),
) {
  const axiosError = error as ApiAxiosError;
  const status = axiosError.response?.status;
  const data = axiosError.response?.data;
  const errors = data?.errors;

  if (status === 422 && errors && form) {
    Object.entries(errors).forEach(([field, messages]) => {
      const message = Array.isArray(messages) ? messages[0] : messages;
      if (message && field in form.getValues()) {
        form.setError(field as Path<T>, { type: "server", message });
      }
    });
    return;
  }

  toast.error(data?.message ?? fallbackMessage);
}

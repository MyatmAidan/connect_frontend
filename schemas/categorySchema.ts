import { z } from "zod";
import { validationMessages } from "@/lib/validation";

export const categorySchema = z.object({
  name_en: z.string().min(1, validationMessages.nameRequired).max(100),
  name_my: z.string().min(1, validationMessages.nameRequired).max(100),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;

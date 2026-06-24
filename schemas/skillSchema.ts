import { z } from "zod";
import { validationMessages } from "@/lib/validation";

export const skillSchema = z.object({
  name: z.string().min(1, validationMessages.nameRequired).max(255),
  category_id: z.string().nullable().optional(),
  image: z.instanceof(File).nullable().optional(),
});

export type SkillFormValues = z.infer<typeof skillSchema>;

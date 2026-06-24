import { z } from "zod";
import { validationMessages } from "@/lib/validation";

export const accountProfileSchema = z.object({
  name: z.string().min(1, validationMessages.nameRequired).max(255),
  email: z.string().email(),
});

export type AccountProfileFormValues = z.infer<typeof accountProfileSchema>;

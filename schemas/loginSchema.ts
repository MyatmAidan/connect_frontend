import { z } from "zod";
import { validationMessages } from "@/lib/validation";

export const loginSchema = z.object({
  email: z.string().email(validationMessages.email),
  password: z.string().min(1, validationMessages.passwordRequired),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

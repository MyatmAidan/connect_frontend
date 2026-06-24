import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  role: z.enum(["user", "admin", "super_admin"]),
  status: z.enum(["active", "banned", "suspended"]),
  avatar: z.string().max(500).nullable().optional(),
});

export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;

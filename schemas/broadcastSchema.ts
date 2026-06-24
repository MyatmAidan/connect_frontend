import { z } from "zod";

export const broadcastSchema = z
  .object({
    title: z.string().min(1).max(255),
    body: z.string().min(1),
    channel: z.enum(["in_app", "telegram", "push"]),
    audience: z.enum(["all", "selected"]),
    user_ids: z.array(z.string()).optional(),
  })
  .refine(
    (data) => data.audience !== "selected" || (data.user_ids?.length ?? 0) > 0,
    {
      message: "Select at least one user.",
      path: ["user_ids"],
    },
  );

export type BroadcastFormValues = z.infer<typeof broadcastSchema>;

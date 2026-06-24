import { z } from "zod";

export const updateDeveloperProfileSchema = z.object({
  profile_photo: z.string().max(500).nullable().optional(),
  headline: z.string().max(255).nullable().optional(),
  bio: z.string().nullable().optional(),
  category_id: z.string().nullable().optional(),
  experience_level: z.string().max(100).nullable().optional(),
  location: z.string().max(255).nullable().optional(),
  github_url: z.string().max(500).nullable().optional(),
  linkedin_url: z.string().max(500).nullable().optional(),
  portfolio_url: z.string().max(500).nullable().optional(),
  is_public: z.boolean(),
  skill_ids: z.array(z.string()).optional(),
});

export type UpdateDeveloperProfileFormValues = z.infer<
  typeof updateDeveloperProfileSchema
>;

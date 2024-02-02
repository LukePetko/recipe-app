import { z } from "zod";

export const createRecipeSchema = z.object({
  title: z
    .string()
    .min(3, "Title must have at least 3 characters")
    .max(255, "Title must have at most 255 characters"),
  description: z.string(),
  prepTime: z.number().int(),
  cookTime: z.number().int(),
  totalTime: z.number().int(),
  servings: z.number().int(),
});

export type CreateRecipeSchemaType = z.infer<typeof createRecipeSchema>;

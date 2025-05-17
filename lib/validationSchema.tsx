import { z } from "zod";
const image = z
  .instanceof(File)
  .optional()
  .refine((file) => !file || file.size <= 4 * 1024 * 1024, {
    message: "Image size must be less than 4MB",
  });
export const status = ["1", "0"] as const;

//! LOGIN FORM
export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Required" }),
});
export type LoginFormType = z.infer<typeof loginFormSchema>;

//! POSTS
export const productFormSchema = z.object({
  title: z.string().min(1),
  url: z.string().min(1).trim(),
  image,
  description: z.string().min(1),
  categories: z.array(z.string()),
  status: z.enum(status),
});
export type ProductFormType = z.infer<typeof productFormSchema>;

//! CATEGORIES
export const categoryFormSchema = z.object({
  name: z.string().min(1),
});
export type CategoryFormType = z.infer<typeof categoryFormSchema>;

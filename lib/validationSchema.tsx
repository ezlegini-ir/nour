import { z } from "zod";

//! LOGIN FORM
export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Required" }),
});
export type LoginFormType = z.infer<typeof loginFormSchema>;

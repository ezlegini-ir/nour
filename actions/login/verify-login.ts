"use server";

import { getAdminByIdentifier } from "@/data/admin";
import bcrypt from "bcrypt";

export const verifyLogin = async (
  identifier: string,
  password: string,
  recaptchaToken: string
) => {
  try {
    const existingAdmin = await getAdminByIdentifier(identifier);
    if (!existingAdmin) return { error: "Invalid Credentials" };

    const isValidPassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isValidPassword) return { error: "Invalid Credentials" };

    return { success: `Otp Sent to ${identifier}.` };
  } catch (error) {
    return { error: String(error) };
  }
};

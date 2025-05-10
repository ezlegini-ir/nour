import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getAdminById } from "./data/admin";
import { prisma } from "./prisma/client";

export default {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const existingUser = await getAdminById(+user.id!);
        if (!existingUser) return token;
        token.id = user.id;
        return token;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  providers: [
    Credentials({
      id: "admin-login",
      name: "Admin Login",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        if (!email) {
          throw new Error("Invalid Credentials");
        }

        const admin = await prisma.admin.findFirst({ where: { email } });
        if (!admin) throw new Error("Invalid Credentials");

        const isValidPassword = admin.password === password;
        if (!isValidPassword) throw new Error("Invalid Credentials");

        console.log("login success");

        return { id: admin.id.toString() };
      },
    }),
  ],
} satisfies NextAuthConfig;

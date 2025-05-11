"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma/client";

export const getAdminById = async (id: string | number) => {
  return await prisma.admin.findFirst({
    where: {
      id: +id,
    },
  });
};

export const getSessionAdmin = async () => {
  const session = await auth();

  if (!session?.user?.id) return;

  return await getAdminById(session?.user?.id);
};

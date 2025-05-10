"use server";
import { database } from "@igraph/database";

export const getAdmins = async () => {
  return await database.admin.findMany();
};

export const getAdminByIdentifier = async (identifier: string) => {
  return await database.admin.findFirst({
    where: {
      OR: [{ phone: identifier }, { email: identifier }],
    },
  });
};

export const getAdminById = async (id: string | number) => {
  return await database.admin.findUnique({
    where: {
      id: +id,
    },
    include: { image: true },
  });
};

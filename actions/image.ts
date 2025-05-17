import { prisma } from "@/prisma/client";
import { deleteCloudFile } from "./cloudinary";

export const deleteImage = async (public_id: string) => {
  try {
    const deletedImage = await prisma.image.delete({
      where: { public_id },
    });

    const res = (await deleteCloudFile(deletedImage.public_id)) as {
      result: "ok";
    };

    if (res.result !== "ok") return { error: "عملیات ناموفق" };

    return { success: "تصویر با موفقیت حذف شد!" };
  } catch (error) {
    return { error: String(error) };
  }
};

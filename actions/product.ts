"use server";

import { ProductFormType } from "@/lib/validationSchema";
import { prisma } from "@/prisma/client";

export const createProduct = async (data: ProductFormType) => {
  const {
    categories,
    descriptionEN,
    descriptionFA,
    qualifications,
    status,
    titleEN,
    titleFA,
    url,
  } = data;

  try {
    const cleanedUrl = url.trim().replace(/\s+/g, "-").toLowerCase();

    const existingProduct = await prisma.product.findUnique({
      where: { url: cleanedUrl },
    });

    if (existingProduct) {
      return { error: "A product with this URL already exists." };
    }

    const newProduct = await prisma.product.create({
      data: {
        description_en: descriptionEN,
        description_fa: descriptionFA,
        status: status === "1" ? "PUBLISHED" : "DRAFT",
        title_en: titleEN,
        title_fa: titleFA,
        url: cleanedUrl,
        categories: {
          create: categories.map((categoryIdStr) => ({
            category: {
              connect: { id: parseInt(categoryIdStr) },
            },
          })),
        },
        qualifications: {
          create: qualifications.map((q) => ({
            metric_en: q.metricEN,
            metric_fa: q.metricFA,
            value_en: q.valueEN,
            value_fa: q.valueFA,
          })),
        },
      },
    });

    return {
      success: "Product Created Successfully.",
      productId: newProduct.id,
    };
  } catch (error) {
    console.error("Create Product Error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

export const updateProduct = async (
  data: ProductFormType,
  productId: number
) => {
  const {
    categories,
    descriptionEN,
    descriptionFA,
    qualifications,
    status,
    titleEN,
    titleFA,
    url,
  } = data;

  const cleanedUrl = url.trim().replace(/\s+/g, "-").toLowerCase();

  try {
    // ✅ Check if another product already has the same URL
    const existingProduct = await prisma.product.findUnique({
      where: { url: cleanedUrl },
    });

    if (existingProduct && existingProduct.id !== productId) {
      return { error: "Another product with this URL already exists." };
    }

    // ✅ Update the product
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        description_en: descriptionEN,
        description_fa: descriptionFA,
        status: status === "1" ? "PUBLISHED" : "DRAFT",
        title_en: titleEN,
        title_fa: titleFA,
        url: cleanedUrl,

        // Replace existing categories
        categories: {
          deleteMany: {},
          create: categories.map((categoryIdStr) => ({
            category: {
              connect: { id: parseInt(categoryIdStr) },
            },
          })),
        },

        // Replace qualifications
        qualifications: {
          deleteMany: {},
          create: qualifications.map((q) => ({
            metric_en: q.metricEN,
            metric_fa: q.metricFA,
            value_en: q.valueEN,
            value_fa: q.valueFA,
          })),
        },
      },
    });

    return {
      success: "Product updated successfully.",
      productId: updatedProduct.id,
    };
  } catch (error) {
    console.error("Update Product Error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

export const deleteProduct = async (id: number) => {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });

    return {
      success: "Product Deleted Successfully.",
    };
  } catch (error) {
    console.error("Create Product Error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

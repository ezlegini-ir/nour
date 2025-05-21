import ProductForm from "@/components/forms/ProductForm";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;

  const categories = await prisma.category.findMany();
  const product = await prisma.product.findFirst({
    where: { id: +id },
    include: {
      qualifications: true,
      categories: { include: { category: true } },
      image: true,
    },
  });

  if (!product) return notFound();

  return (
    <div className="space-y-3">
      <h3>Update Product</h3>

      <ProductForm type="UPDATE" categories={categories} product={product} />
    </div>
  );
};

export default page;

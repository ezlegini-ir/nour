import ProductForm from "@/components/forms/ProductForm";
import { prisma } from "@/prisma/client";

const page = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div className="space-y-3">
      <h3>Create New Post</h3>

      <ProductForm type="NEW" categories={categories} />
    </div>
  );
};

export default page;

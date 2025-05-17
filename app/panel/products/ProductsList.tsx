import EditButton from "@/components/EditButton";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import ViewButton from "@/components/ViewButton";
import {
  Category,
  Image as ImageType,
  Product,
  ProductCategory,
} from "@/prisma/generated/prisma";
import { placeHolder } from "@/public";
import { formatMiladiDate } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";

export interface CategoriesType {
  category: Category;
  postId: number;
  categoryId: number;
}
export interface ProductCategoryType extends ProductCategory {
  category: Category;
}

export interface ProductType extends Product {
  image: ImageType | null;
  categories: ProductCategoryType[];
}

interface Props {
  product: ProductType[];
  totalProducts: number;
  pageSize: number;
}

const ProductsList = async ({ product, totalProducts, pageSize }: Props) => {
  return (
    <div className="card">
      <Table columns={columns} data={product} renderRows={renderRows} />
      <Pagination pageSize={pageSize} totalItems={totalProducts} />
    </div>
  );
};

const renderRows = (product: ProductType) => {
  return (
    <TableRow key={product.id} className="odd:bg-slate-50">
      <TableCell>
        <Link
          href={`/panel/products/${product.id}`}
          className="flex gap-2 items-center text-primary"
        >
          <Image
            alt="product"
            src={product.image?.url || placeHolder}
            width={65}
            height={65}
            className="rounded-sm aspect-square object-cover hidden lg:block bg-muted"
          />
          <span dir="rtl">{product.title_en}</span>
        </Link>
      </TableCell>
      <TableCell className="text-center hidden xl:table-cell">hi</TableCell>
      <TableCell className="text-center hidden xl:table-cell">
        <Badge
          variant={product.status === "DRAFT" ? "secondary" : "default"}
          className="w-[100px]"
        >
          {product.status}
        </Badge>
      </TableCell>
      <TableCell className="text-center" dir="rtl">
        {product.categories &&
          product.categories
            .map((item) => item.category.name_en)
            .slice(0, 2)
            .join(", ") +
            (product.categories.length > 2
              ? `، ${product?.categories?.length - 2} دیگر...`
              : "")}
      </TableCell>
      <TableCell className="text-center">
        {(77389).toLocaleString("en-US")}
      </TableCell>
      <TableCell className="text-center hidden xl:table-cell">
        {formatMiladiDate(product.createdAt)}
      </TableCell>
      <TableCell className="lg:flex gap-2 hidden ">
        <EditButton href={`/panel/products/${product.id}`} />
        <ViewButton
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/${product?.url}`}
        />
      </TableCell>
    </TableRow>
  );
};

const columns = [
  { label: "Title", className: "w-[550px]" },
  { label: "Author", className: "text-center hidden xl:table-cell" },
  { label: "Status", className: "text-center hidden xl:table-cell" },
  { label: "Category", className: "text-center" },
  { label: "Views", className: "text-center" },
  { label: "Published At", className: "text-center hidden xl:table-cell" },
  {
    label: "Actions",
    className: "text-right w-[60px] hidden lg:table-cell",
  },
];

export default ProductsList;

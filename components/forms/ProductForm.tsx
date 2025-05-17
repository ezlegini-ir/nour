"use client";

import {
  ProductCategoryType,
  ProductType,
} from "@/app/panel/products/ProductsList";
import CardBox from "@/components/CardBox";
import DeleteButton from "@/components/DeleteButton";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useLoading } from "@/hooks/useLoading";
import { ProductFormType, productFormSchema } from "@/lib/validationSchema";
import { Category } from "@/prisma/generated/prisma";
import { useImagePreview } from "@/utils/image";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ImageField from "../ImageField";
import { Textarea } from "../ui/textarea";

export interface CategoriesType {
  category: ProductCategoryType;
  postId: number;
  categoryId: number;
}

interface Props {
  type: "NEW" | "UPDATE";
  product?: ProductType;
  categories: Category[];
}

const ProductForm = ({ type, product, categories }: Props) => {
  // HOOKS
  const { loading, setLoading } = useLoading();
  const { imagePreview, setImagePreview } = useImagePreview(
    product?.image?.url
  );

  // CONSTS
  const isUpdateType = type === "UPDATE";

  const form = useForm<ProductFormType>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: product?.title || "",
      url: product?.url || "",
      description: product?.description || "",
      status: product?.status ? (product?.status === "DRAFT" ? "0" : "1") : "0",
      categories:
        product?.categories?.map((c) => c.category.id.toString()) || [],
      image: undefined,
    },
  });

  // onSubmit handles post creation/updating.
  const onSubmit = async (data: ProductFormType) => {
    console.log(data);
    // setLoading(true);
    // const res = isUpdateType
    //   ? await updatePost(updatedData, post?.id!)
    //   : await createPost(updatedData);
    // if (res.error) {
    //   toast.error(res.error);
    //   setLoading(false);
    //   return;
    // }
    // if (res.success) {
    //   toast.success(res.success);
    //   setLoading(false);
    //   if (isUpdateType) {
    //     router.refresh();
    //   } else {
    //     router.push(`/posts/${res.data?.id}`);
    //   }
    // }
  };

  const onDelete = async () => {
    setLoading(true);

    // const res = await deletePost(post?.id!);

    // if (res.error) {
    //   toast.error(res.error);
    //   setLoading(false);
    // }

    // if (res.success) {
    //   toast.success(res.success);
    //   router.push("/posts/list");
    // }
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-12 gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-12 md:col-span-9 space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input dir="rtl" className="text-left" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url</FormLabel>
                  <FormControl>
                    <Input dir="rtl" className="text-left" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isUpdateType && (
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/${product?.url}`}
                className="text-xs text-gray-500"
              >
                <p>
                  {process.env.NEXT_PUBLIC_BASE_URL}/{product?.url}
                </p>
              </Link>
            )}
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} className="min-h-60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-12 md:col-span-3 space-y-4 order-first md:order-last">
          <CardBox title="Actions">
            <Button
              disabled={
                !form.formState.isValid || loading || !form.formState.isDirty
              }
              className="w-full flex gap-2"
              type="submit"
            >
              {<Loader loading={loading} />}
              {type === "NEW" ? "Create" : "Update"}
            </Button>

            <Separator />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">⬜ Draft</SelectItem>
                        <SelectItem value="1">🟩 Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isUpdateType && (
              <div className="space-y-5">
                <DeleteButton disabled={loading} onDelete={onDelete} />

                <Separator />

                <div className="flex justify-between text-gray-500 text-xs">
                  <p className="flex flex-col">
                    <span>Published At</span>
                    <span className="text-sm">
                      {product?.createdAt.toLocaleString()}
                    </span>
                  </p>

                  <div>
                    <Separator orientation="vertical" />
                  </div>

                  <p className="flex flex-col">
                    <span>Last Update</span>
                    <span className="text-sm">
                      {product?.updatedAt.toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </CardBox>

          <CardBox title="Image">
            <ImageField
              control={form.control}
              setImagePreview={setImagePreview}
              imagePreview={imagePreview}
              setValue={form.setValue}
              public_id={product?.image?.public_id}
            />
          </CardBox>

          <CardBox title="Categories">
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  {categories?.map((item) => {
                    const isChecked = field.value?.includes(item.id.toString());

                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start gap-3 pb-1.5"
                      >
                        <FormControl>
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                              const updatedCategories = checked
                                ? [...field.value, item.id.toString()]
                                : field.value.filter(
                                    (value) => value !== item.id.toString()
                                  );

                              field.onChange(updatedCategories);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    );
                  })}
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardBox>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;

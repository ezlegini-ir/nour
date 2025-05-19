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
import { useFieldArray, useForm } from "react-hook-form";
import ImageField from "../ImageField";
import { Textarea } from "../ui/textarea";
import { Plus, Trash } from "lucide-react";

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
      titleEN: product?.title_en || "",
      titleFA: product?.title_fa || "",
      url: product?.url || "",
      descriptionEN: product?.description_en || "",
      descriptionFA: product?.description_fa || "",
      status: product?.status ? (product?.status === "DRAFT" ? "0" : "1") : "0",
      categories:
        product?.categories?.map((c) => c.category.id.toString()) || [],
      image: undefined,
      qualifications: product?.qualifications.length
        ? product.qualifications.map((qua) => ({
            metricEN: qua.metric_en,
            metricFA: qua.metric_fa,
            valueEN: qua.value_en,
            valueFA: qua.value_fa,
          }))
        : [{ metricEN: "", metricFA: "", valueEN: "", valueFA: "" }],
    },
  });

  // onSubmit handles post creation/updating.
  const onSubmit = async (data: ProductFormType) => {
    console.log(data);
  };

  const onDelete = async () => {
    setLoading(true);
  };

  // 🧮 Course Includes Field Array
  const { fields, append, remove } = useFieldArray({
    name: "qualifications",
    control: form.control,
  });

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-12 gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-12 md:col-span-9 space-y-4">
          <FormField
            control={form.control}
            name="titleEN"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title (EN)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="titleFA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title (FA)</FormLabel>
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
                  <FormLabel>Url (EN)</FormLabel>
                  <FormControl>
                    <Input className="text-left" {...field} />
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
            name="descriptionEN"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (EN)</FormLabel>
                <FormControl>
                  <Textarea {...field} className="min-h-40" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="descriptionFA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (FA)</FormLabel>
                <FormControl>
                  <Textarea
                    dir="rtl"
                    {...field}
                    className="min-h-40 text-left"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Qualifications</FormLabel>
            <div className="space-y-2 card p-3">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <FormField
                    control={form.control}
                    name={`qualifications.${index}.metricEN`}
                    render={({ field }) => (
                      <FormItem className="flex gap-1 items-center w-full">
                        <FormControl>
                          <Input
                            placeholder={`Metric EN - ${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`qualifications.${index}.valueEN`}
                    render={({ field }) => (
                      <FormItem className="flex gap-1 items-center w-full">
                        <FormControl>
                          <Input
                            placeholder={`Value EN - ${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div>|||</div>

                  <FormField
                    control={form.control}
                    name={`qualifications.${index}.metricFA`}
                    render={({ field }) => (
                      <FormItem className="flex gap-1 items-center w-full">
                        <FormControl>
                          <Input
                            placeholder={`Metric FA - ${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`qualifications.${index}.valueFA`}
                    render={({ field }) => (
                      <FormItem className="flex gap-1 items-center w-full">
                        <FormControl>
                          <Input
                            placeholder={`Value FA - ${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          disabled={
                            form.getValues("qualifications")?.length === 1
                          }
                          onClick={() => remove(index)}
                        >
                          <Trash className="text-gray-400" size={16} />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          disabled={index + 1 < fields.length}
                          onClick={() =>
                            append({
                              metricEN: "",
                              metricFA: "",
                              valueEN: "",
                              valueFA: "",
                            })
                          }
                        >
                          <Plus className="text-gray-400" size={16} />
                        </Button>
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
            <FormMessage />
          </FormItem>
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
                          {item.name_en}
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

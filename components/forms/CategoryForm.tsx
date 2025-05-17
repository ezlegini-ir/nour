"use client";

import DeleteButton from "@/components/DeleteButton";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoading } from "@/hooks/useLoading";
import { categoryFormSchema, CategoryFormType } from "@/lib/validationSchema";
import { Category } from "@/prisma/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  type: "NEW" | "UPDATE";
  category?: Category;
}

const CategoryForm = ({ type, category }: Props) => {
  // HOOKS
  const { loading, setLoading } = useLoading();

  const isUpdateType = type === "UPDATE";

  const form = useForm<CategoryFormType>({
    resolver: zodResolver(categoryFormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: category?.name || "",
    },
  });

  const onSubmit = async (data: CategoryFormType) => {
    setLoading(true);

    console.log(data);

    setLoading(false);
  };

  const onDelete = async () => {
    console.log("Deleted");
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={!form.formState.isValid || loading}
          className="w-full flex gap-2"
          type="submit"
        >
          <Loader loading={loading} />
          {isUpdateType ? "Update" : "Create"}
        </Button>

        {isUpdateType && <DeleteButton onDelete={onDelete} />}
      </form>
    </Form>
  );
};

export default CategoryForm;

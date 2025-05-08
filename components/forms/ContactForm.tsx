"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormType) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex flex-col md:flex-row gap-20">
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p className="text-muted-foreground">
          If you have any questions or inquiries, please feel free to reach out
          to us using the information below.
        </p>

        <hr />

        <p>
          <strong>Email:</strong> info@chininour.com
        </p>
        <p>
          <strong>Phone:</strong> +98 24 3575 2007
        </p>
        <p>
          <strong>Address:</strong> 15th km of Abhar-Zanjan Road, Zanjan, Iran
        </p>
      </div>

      <div className="w-full md:w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-32 max-h-56"
                      placeholder="Your Message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Send Message</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;

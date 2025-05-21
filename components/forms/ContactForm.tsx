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

interface Props {
  faLang: boolean;
}

const ContactForm = ({ faLang }: Props) => {
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
        <h2 className="text-xl font-bold">
          {faLang ? "اطلاعات تماس" : "Contact Info"}
        </h2>
        <p className="text-muted-foreground">
          {faLang
            ? "اگر سوال یا درخواستی دارید، لطفاً بدون تردید از طریق اطلاعات زیر با ما در ارتباط باشید."
            : `If you have any questions or inquiries, please feel free to reach out
          to us using the information below.`}
        </p>

        <hr />

        <p>
          <strong>{faLang ? "ایمیل:" : "Email:"}</strong> info@chininour.com
        </p>
        <p>
          <strong>{faLang ? "تماس:" : "Phone:"}</strong>{" "}
          <span dir="ltr">+98 24 3575 2007</span>
        </p>
        <p>
          <strong>{faLang ? "آدرس:" : "Address:"}</strong>
          {faLang
            ? `کیلومتر 15 جاده ابهر، زنجان، شرکت چینی نور`
            : `15th km of
          Abhar-Zanjan Road, Zanjan, Iran`}
        </p>

        <div className="bg-muted h-60 rounded-md flex justify-center items-center">
          Google Map
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {faLang ? "نام و نام خانوادگی" : "Full Name"}{" "}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>{faLang ? "ایمیل" : "Email"} </FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>
                    {faLang ? "شماره تماس" : "Phone Number"}{" "}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  {faLang ? "پیام شما" : "Message"}{" "}
                  <FormControl>
                    <Textarea className="min-h-32 max-h-56" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">
              {faLang ? "ارسال پیام" : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;

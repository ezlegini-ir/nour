import Image from "@/components/Image";
import { Button } from "@/components/ui/button";
import { getLang } from "@/lib/getLang";
import { italiGray } from "@/public/products";
import Link from "next/link";
import React from "react";

const page = async () => {
  const faLang = (await getLang()) === "FA";

  return (
    <div className="flex justify-between items-center h-full">
      <div className="space-y-5 max-w-xl">
        <h1 className="flex flex-col gap-1.5">
          <span className="text-xl">
            {faLang
              ? "هنر ظروف استون ور رنگی با"
              : "Experience the Art of Colorful Dining with"}
          </span>
          <span className="text-primary text-6xl font-bold">
            {faLang ? "شرکت چینی نور" : "Nour Porcelain Co"}
          </span>
        </h1>

        <p className="text-muted-foreground">
          {faLang
            ? `با ظروف غذاخوری شیک و رنگارنگ نور پرسلین، زیبایی و سادگی را به میز خود
          بیاورید. طراحی مدرن، کیفیت بالا و تنوع چشم‌نواز رنگ‌ها، این محصولات را
          به انتخابی ایده‌آل برای هر سبک و سلیقه‌ای تبدیل کرده‌اند.`
            : `Discover elegant and colorful dinnerware designed for modern living.
          Nour Porcelain Co specializes in minimal, high-quality dishes
          available in a wide range of vibrant colors to suit every table and
          taste.`}
        </p>

        <div className="flex gap-3 pt-3">
          <Link href={"/products"}>
            <Button size={"lg"}>
              {faLang ? "مشاهده محصولات" : "Visit Products"}
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button size={"lg"} variant={"secondary"}>
              {faLang ? "ارتباط با ما" : "Contact Us"}
            </Button>
          </Link>
        </div>
      </div>
      <Image alt="" src={italiGray} size={1200} className="w-[600px]" />
    </div>
  );
};

export default page;

import Image from "@/components/Image";
import { Button } from "@/components/ui/button";
import { italiGray } from "@/public/products";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="space-y-3 max-w-xl">
        <h1 className="flex flex-col gap-1.5">
          <span className="text-xl">
            Experience the Art of Colorful Dining with
          </span>
          <span className="text-primary text-6xl font-bold">
            Nour Porcelain Co
          </span>
        </h1>

        <p className="text-muted-foreground">
          Discover elegant and colorful dinnerware designed for modern living.
          Nour Porcelain Co specializes in minimal, high-quality dishes
          available in a wide range of vibrant colors to suit every table and
          taste.
        </p>

        <div className="flex gap-3 pt-3">
          <Button size={"lg"}>
            <Link href={"/products"}>Visit Products</Link>
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
        </div>
      </div>
      <Image alt="" src={italiGray} size={1200} className="w-[600px]" />
    </div>
  );
};

export default page;

import Image from "@/components/Image";
import { Button } from "@/components/ui/button";
import { italiGray } from "@/public/products";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-3 max-w-xl">
        <h1 className="flex flex-col gap-1">
          <span className="text-3xl">Welcome To</span>{" "}
          <span className="text-primary text-6xl font-bold">
            Nour Porcelain Co
          </span>
          <span className="text-3xl">Website</span>
        </h1>

        <p className="text-muted-foreground">
          Discover elegant and colorful dinnerware designed for modern living.
          Nour Porcelain Co specializes in minimal, high-quality dishes
          available in a wide range of vibrant colors to suit every table and
          taste.
        </p>

        <div className="flex gap-3">
          <Button>Visit Products</Button>
          <Button variant={"secondary"}>Contact Us</Button>
        </div>
      </div>
      <Image alt="" src={italiGray} size={1200} className="w-[600px]" />
    </div>
  );
};

export default page;

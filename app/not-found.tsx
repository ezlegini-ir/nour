import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center h-full text-center">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-primary">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>

      <div>
        <Button>
          <Link href={"/"}> Go Back Home </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

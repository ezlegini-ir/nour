import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "./Image";
import { dish } from "@/public/products";

interface Props {
  images: string[];
}

const ImageDialog = ({ images }: Props) => {
  return (
    <>
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild className="cursor-pointer">
            <div className="bg-muted rounded-md aspect-square text-muted-foreground flex items-center justify-center">
              <Image
                alt={`Photo ${index + 1}`}
                src={dish}
                size={300}
                className="rounded-md object-cover"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[650px] p-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Image {index + 1}</DialogTitle>
            </DialogHeader>
            <DialogDescription className="p-0">
              <Image
                alt={`Photo ${index + 1}`}
                src={dish}
                size={600}
                className="rounded-md object-cover w-full aspect-square"
              />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};

export default ImageDialog;

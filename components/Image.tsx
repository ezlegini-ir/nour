import { default as NextImage } from "next/image";
import React from "react";

interface Props {
  alt: string;
  src: string;
  size?: number;
  className?: string;
}

const Image = ({ alt, src, size, className }: Props) => {
  return (
    <NextImage
      placeholder="blur"
      blurDataURL={src}
      alt={alt}
      src={src}
      width={size || 625}
      height={size || 625}
      className={`${className} object-cover`}
    />
  );
};

export default Image;

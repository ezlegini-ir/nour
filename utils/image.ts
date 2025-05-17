import { useState } from "react";

export const useImagePreview = (defaultPreview: string | undefined) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    defaultPreview
  );
  return { imagePreview, setImagePreview };
};

import { useState } from "react";

export const useIdentifier = () => {
  const [identifier, setIdentifier] = useState("");
  return { identifier, setIdentifier };
};

import { useState } from "react";

export const useLoginStep = <T extends string>(steps: T[]) => {
  const [loginStep, setLoginStep] = useState<T>(steps[0]);

  return { loginStep, setLoginStep };
};

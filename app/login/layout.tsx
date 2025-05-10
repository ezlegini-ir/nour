import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`max-w-screen-xl mx-auto p-3 grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen`}
    >
      <main className="mt-24 w-full max-w-[350px] mx-auto">{children}</main>
    </div>
  );
}

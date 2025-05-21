export async function getLang(): Promise<"FA" | "EN"> {
  if (typeof window !== "undefined") {
    // Client-side
    return require("js-cookie").get("lang") || "FA";
  } else {
    // Server-side
    const { cookies } = require("next/headers");
    return (await cookies()).get("lang")?.value || "FA";
  }
}

export function getLangUniversal(): string {
  if (typeof window !== "undefined") {
    // Client-side
    return require("js-cookie").get("lang") || "EN";
  } else {
    // Server-side
    const { cookies } = require("next/headers");
    return cookies().get("lang")?.value || "EN";
  }
}

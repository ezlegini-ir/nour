import Link from "next/link";
import NourLogo from "./NourLogo";
import { Button } from "./ui/button";
import { getSessionAdmin } from "@/data/admin";
import { User } from "lucide-react";
import LangToggle from "./LangToggle";
import { getLang } from "@/lib/getLang";

const NavBar = async () => {
  const admin = await getSessionAdmin();
  const faLang = (await getLang()) === "FA";

  return (
    <div className="flex items-center justify-between py-4">
      <Link href={"/"}>
        <NourLogo />
      </Link>

      <div className="flex items-center gap-12">
        <ul className="flex gap-12">
          {(faLang ? menuItemsFA : menuItemsEN).map((item, idx) => (
            <li key={idx}>
              <Link className="hover:text-foreground/80" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <LangToggle />

        {admin ? (
          <Link href={"/panel"}>
            <Button variant={"outline"}>
              <User />
              {admin.name}
            </Button>
          </Link>
        ) : (
          <Link href={"/panel"}>
            <Button>
              <User />
              {faLang ? "ورود" : "Login"}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

const menuItemsEN = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about-us" },
];

const menuItemsFA = [
  { label: "صفحه اصلی", href: "/" },
  { label: "محصولات", href: "/products" },
  { label: "ارتباط با ما", href: "/contact" },
  { label: "درباره ما", href: "/about-us" },
];

export default NavBar;

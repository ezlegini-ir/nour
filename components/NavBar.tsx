import Link from "next/link";
import NourLogo from "./NourLogo";
import { Button } from "./ui/button";
import { getSessionAdmin } from "@/data/admin";
import { User } from "lucide-react";
import LangToggle from "./LangToggle";

const NavBar = async () => {
  const admin = await getSessionAdmin();

  return (
    <div className="flex items-center justify-between py-4">
      <Link href={"/"}>
        <NourLogo />
      </Link>

      <div className="flex items-center gap-12">
        <ul className="flex gap-12">
          {menuItems.map((item, idx) => (
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
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about-us" },
];

export default NavBar;

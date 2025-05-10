import Link from "next/link";
import NourLogo from "./NourLogo";
import { Button } from "./ui/button";

const NavBar = () => {
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

        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    </div>
  );
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default NavBar;

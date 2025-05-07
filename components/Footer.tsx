import React from "react";
import NourLogo from "./NourLogo";
import Link from "next/link";
import NourTypoLogo from "./NourTypoLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-3 pb-2 text-sm text-muted-foreground">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/">
          <NourTypoLogo />{" "}
        </Link>

        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-foreground">
              Contact Us
            </Link>
          </li>
        </ul>

        <p className="text-center md:text-right">
          © {new Date().getFullYear()} Nour Porcelain Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import NourTypoLogo from "./NourTypoLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-3 text-sm text-muted-foreground">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/">
          <NourTypoLogo />{" "}
        </Link>

        <p className="text-center md:text-right">
          © {new Date().getFullYear()} Nour Porcelain Co |{" "}
          <span>
            Developed By{" "}
            <a target="_blank" href="https://igraphical.ir">
              iGraphical Co.
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

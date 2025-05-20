"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { iran, uk } from "@/public";
import { ChevronDown } from "lucide-react";
import Image from "./Image";

export default function LangToggle() {
  const [language, setLanguage] = useState("FA");
  const router = useRouter();

  // Load from cookie on mount
  useEffect(() => {
    const savedLang = Cookies.get("lang");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Save to cookie on change
  useEffect(() => {
    Cookies.set("lang", language, { expires: 365 });
    router.refresh(); // Only if SSR depends on language
  }, [language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">
          <ChevronDown className="text-foreground" />
          {language === "FA" ? (
            <Image alt="farsi" src={iran} size={25} />
          ) : (
            <Image alt="english" src={uk} size={25} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="FA">
            <Image alt="farsi" src={iran} size={25} />
            Farsi
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="EN">
            <Image alt="english" src={uk} size={25} />
            English
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { ChartNoAxesGantt, Home, LogOut, ScanBarcode } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import NourTypoLogo from "./NourTypoLogo";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/panel",
    icon: Home,
  },
  {
    title: "Products",
    url: "/panel/products",
    icon: ScanBarcode,
  },
  {
    title: "Categories",
    url: "/panel/categories",
    icon: ChartNoAxesGantt,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 pt-6">
        <Link href={"/"}>
          <NourTypoLogo />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button variant={"secondary"}>
          <LogOut /> Log Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

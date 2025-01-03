import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { components } from "@/constants/index";
import Link from "next/link";
const MobileMenu = () => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
          {components.map((component) => (
            <Link key={component.title} href={component.href}>
              {component.title}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

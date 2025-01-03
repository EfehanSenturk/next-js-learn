import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";

const CartMenu = () => {
  return (
    <div className="flex">
      <Sheet>
        <SheetTrigger>
          <ShoppingBagIcon />
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
          <div>EmptyCard</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartMenu;

"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Heart, Search, UserIcon } from "lucide-react";
import { Pacifico } from "next/font/google";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "../Menu/Cart";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
    setQuery("");
  };
  return (
    <div className="mx-auto bgOne shadow-md">
      <div className="container flex items-center justify-between p-5">
        <div>
          <Link href="/">
            <h2 className={`${pacifiko.className} text-xl`}>Ecommerce</h2>
          </Link>
        </div>
        <div className="hidden md:flex relative md:min-w-96 lg: w-1/2">
          <Input
            className="w-full border-2"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <Button
            variant="link"
            className="absolute right-1"
            onClick={handleSearch}
          >
            <Search />
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/fav">
            <Heart />
          </Link>{" "}
          <CartMenu />{" "}
          <Link href="/login">
            <UserIcon />
          </Link>{" "}
          <ModeToggle /> <MobileMenu />
        </div>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;

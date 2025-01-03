"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  return (
    <div className="text-sm text-center flex flex-col p-4 bg-myColor-300">
      <Button
        variant="link"
        onClick={() => {
          router.push("/");
        }}
      >
        {" "}
        E commerce website
      </Button>
      <Link href={"https://github.com/EfehanSenturk"}>@EfehanSenturk</Link>
    </div>
  );
};

export default Footer;

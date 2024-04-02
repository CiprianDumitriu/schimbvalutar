import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex h-16 w-full items-center justify-between bg-[#FFFFFF] p-6 shadow-md">
      <div>
        <Link href="/staff">
          Press
          {/* Logo */}
        </Link>
      </div>

      <div className="flex w-auto items-center gap-2 rounded-xl border-2 border-solid border-[#DBDEE0] p-0.5 px-3">
        <Image
          alt="search"
          src="/assets/icons/search.svg"
          width={20}
          height={20}
        ></Image>
        <Input
          type="text"
          placeholder="Search globally"
          className=" border-none shadow-none focus-visible:ring-transparent"
        />
      </div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;

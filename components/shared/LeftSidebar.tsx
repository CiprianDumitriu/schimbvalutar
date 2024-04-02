import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
  return (
    <div className="flex min-h-screen min-w-[200px] flex-col bg-[#FFFFFF] pt-[128px] shadow-sm">
      <div>
        <Link
          href="/staff"
          className="flex items-center gap-4 px-6 py-2 hover:bg-[#F6F6F6] focus:bg-[#EAF5FF]"
        >
          <Image
            src="/assets/icons/clock-2.svg"
            alt="account"
            width={32}
            height={24}
            className=""
          />
          <p className="font-bold">Shifts</p>
        </Link>
      </div>
      <div>
        <Link
          href="/staff"
          className="flex items-center gap-4 px-6 py-2 hover:bg-[#F6F6F6] focus:bg-[#EAF5FF]"
        >
          <Image
            src="/assets/icons/computer.svg"
            alt="account"
            width={32}
            height={24}
            className=""
          />
          <p className="font-bold">Overview</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;

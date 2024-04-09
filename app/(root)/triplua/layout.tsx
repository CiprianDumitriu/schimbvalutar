import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function StaffLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-auto w-full bg-[#F6F6F6]">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex h-fit justify-between gap-20 px-6 pb-6 pt-36">
          {children}
        </section>
      </div>
    </main>
  );
}

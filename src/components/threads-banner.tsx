"use client";

import useWindow from "@/hooks/use-window";
import React from "react";
import { Icons } from "@/components/icons";
import Image from "next/image";

export default function ThreadsBanner() {
  const { isMobile } = useWindow();
  return (
    <header className="mx-auto  max-w-screen-md md:max-w-screen-2xl lg:max-w-[1800px]">
      {isMobile ? (
        <div className="flex items-center justify-center ">
          <Icons.logo className="mb-6 mt-16 h-10 w-10 sm:h-16 sm:w-16" />
        </div>
      ) : (
        <nav className="pointer-events-none z-50 flex w-full select-none items-center justify-center">
          <Icons.logo className="mb-6 mt-16 h-8 w-8 sm:h-16 sm:w-16" />
          <h2 className=" mb-6 ml-5 mt-16 text-[28px] font-bold text-white ">
            Thread Buzz
          </h2>
          {/* <Image
                        width={1000}
                        height={1000}
                        src="/bg.webp"
                        alt="Background"
                        className="w-full h-[500px] object-cover"
                        unoptimized
                        priority
                    /> */}
        </nav>
      )}
    </header>
  );
}

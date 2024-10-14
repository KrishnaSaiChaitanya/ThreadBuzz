import Image from "next/image";
import React from "react";

export default function RootLoading() {
  const LogoImage = "/logo.png";
  const MetaImage = "/meta.png";

  return (
    <div className="flex h-screen flex-col justify-between ">
      <div className="flex flex-grow items-center justify-center ">
        {/* <Image
                    alt="Threads"
                    src={LogoImage}
                    width={100}
                    height={100}
                    priority
                /> */}
        <p>Loading ...</p>
      </div>
      <div className="mb-6  flex w-full items-center justify-center">
        <h2>Made BY T.K.S Chaitanya</h2>
      </div>
    </div>
  );
}

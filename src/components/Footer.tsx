import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-1 border-y-2 my-1 border-[#181818] items-center">
      <div className=" border-y-2 my-2 border-[#0A0A0A">
        <div className="flex flex-col py-10 px-[60px] gap-2 ">
          <div className="flex flex-col justify-center gap-7 items-center">
            <Link href="/">
              <h2 className="text-[#b7b9b8] font-mono text-2xl tracking-[0.2rem]	 leading-relaxed">
                elegiacal & rotten
              </h2>
            </Link>
            <p className="text-[#b7b9b8] font-mono py-3 leading-relaxed">
            <Link 
              href="/"
              target="_blank" 
              rel="noopener noreferrer">
              ©2024 by elegiacal & rotten;
              Necrosis.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

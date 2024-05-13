"use client";
import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { FolderClosedIcon, MenuIcon, User, X } from "lucide-react";
import { navItems } from "@/config/site";
import NavLink from "./NavLink";
export const metadata: Metadata = {
  title: "ellegiacally_rotten",
  description: "elegiacally_rotten",
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" border-y-2 my-1 border-[#262626] items-center">
      <div className=" border-y my-2 border-[#565555]">
        <div className="hidden md:flex md:flex-col md:py-10 md:px-[60px] md:gap-2 ">
          <div className="flex flex-row justify-start gap-3 items-center">
            <Link href="/">
              <img
                src="/images/ellegiacally_rotten_favicon.ico"
                alt="Vercel Logo"
                width={0}
                height={0}
                style={{ width: "45px", height: "45px" }}
              />
            </Link>
            <Link href="/">
              <h2
                style={{ fontFamily: "courier new" }}
                className="text-[#e0e3e2]  text-2xl tracking-[0.2rem]	 leading-relaxed"
              >
                elegiacal & rotten
              </h2>
            </Link>
          </div>
          <div className="my-1 w-full  border-t-[0.2px] border-[#dee5e3]" />
          <div className="flex flex-row justify-between gap-2 items-center">
            <div className="space-x-4">
              {navItems.map((item, index) => (
                <NavLink key={index} href={item.link}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:hidden">
          <div className="flex justify-between items-center py-4 px-6">
            <Link href="/">
              <img
                src="/images/ellegiacally_rotten_favicon.ico"
                alt="Vercel Logo"
                width={0}
                height={0}
                style={{ width: "45px", height: "45px" }}
              />
            </Link>
            <button onClick={toggleMobileMenu}>
              {/* Use an icon or any visual indicator for the mobile menu button */}
              <div className="text-[#aaadac] hover:text-[#3f4139]">
                <MenuIcon />
              </div>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="py-2 px-4 mobile-menu bg-[#181818] h-full  flex flex-col items-center">
              <button onClick={toggleMobileMenu}>
                {/* Use an icon or any visual indicator for the mobile menu button */}
                <div className="text-[#aaadac] py-10 hover:text-[#3f4139]">
                  <X />
                </div>
              </button>
              {navItems.map((item, index) => (
                <div key={index} className="my-2 gap-8">
                  <Link href={item.link} passHref onClick={toggleMobileMenu}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

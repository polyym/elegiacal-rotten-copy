"use client";
import React, { useEffect, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { NavBottomProps, NavLinkProps } from "@/types";
import { posts } from "@/utils/helper";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { secondaryNav } from "@/config/site";
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();
  // Determine if the current route matches the href
  const isActive = path === href;
  return (
    <Link href={href}>
      <span
        className={`text-sm hover:text-red-400 cursor-pointer ${isActive && "text-[#b73d3d]"}`}
        style={{ fontWeight: "300" }}
      >
        {children}
      </span>
    </Link>
  );
};
const PostNavBottom = ({ setFilteredPosts }: NavBottomProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.des.toLowerCase().includes(lowerCaseQuery) ||
        post.content.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredPosts(filtered);
    setSearchQuery("");
  };

  const toggleSearch = () => {
    setShow(!show);
  };

  return (
    <div className="mx-auto flex flex-col  sm:flex-row justify-between items-center">
      <ul className="flex space-x-6 mt-6 mb-4 sm:mb-0">
        {secondaryNav.map((item) => (
          <NavLink key={item.id} href={item.link}>
            {item.label}
          </NavLink>
        ))}
      </ul>

      <div
        className={`relative ${show ? "relative sm:ml-[300px] " : "sm:ml-[500px] "} `}
      >
        {show && (
          <>
            <SearchIcon className="absolute   -left-3 top-0 text-gray-500 cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e: { key: string }) => {
                if (e.key === "Enter") {
                  handleFilter();
                }
              }}
              className={`text-[#636565c2] bg-transparent   focus:outline-none focus:border-b px-5 py-1 border-b rounded-md `}
            />
            <X
              onClick={toggleSearch}
              className="absolute right-0 top-0 text-gray-500   cursor-pointer"
            />
          </>
        )}
        {!show && (
          <Button
            variant="outline"
            className="rounded-none border-none p-2 sm:p-6 bg-transparent border-transparent hover:bg-transparent"
            onClick={toggleSearch}
          >
            <SearchIcon className=" " />
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostNavBottom;

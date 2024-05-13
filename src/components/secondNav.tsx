"use client";
import React, { useState } from "react";
import { CrossIcon, SearchIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavBottomProps } from "@/types";
import { posts } from "@/utils/helper";
import { useRouter } from "next/navigation";



const NavBottom = ({  setFilteredPosts }: NavBottomProps) => {
  const router =useRouter()
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
  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleFilter();
      

    }
  };

  

  return (
    <div className="mx-auto flex flex-col sm:flex-row justify-between items-center">
      <ul className="flex space-x-4 mt-4 mb-2 sm:mb-0">
        <span
          className="text-white hover:text-red-400 cursor-pointer"
        
        >
          All Posts
        </span>
        <span
          className="text-white  hover:text-red-400 cursor-pointer"
          
        >
          Poems
        </span>
        <span
          className="text-white  hover:text-red-400 cursor-pointer"
      
        >
          Short Stories
        </span>
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
              onKeyDown={(e: { key: string; }) => {
                if (e.key === 'Enter') {
                 
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

export default NavBottom;

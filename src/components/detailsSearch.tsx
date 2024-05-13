"use client";
import React, { useEffect, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { Button } from "./ui/button";

import { NavBottomProps } from "@/types";
import { posts } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";



const PostNavSearch = ({
 
  setFilteredPosts,
}: NavBottomProps) => {
  const router = useRouter();
  const path = usePathname();
  const [show, setShow] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("/"); // Set default category

  const handleFilter = () => {
    console.log("Filtering posts...");
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.des.toLowerCase().includes(lowerCaseQuery) ||
        post.content.toLowerCase().includes(lowerCaseQuery)
    );
    console.log("Filtered Posts:", filtered);
    console.log("Posts:", posts);

    setFilteredPosts(filtered);
    console.log("Filtered Posts after state update:", filtered);
console.log("Filtered Posts after state update:", filtered);


    router.push(`/post/?search=${encodeURIComponent(String(lowerCaseQuery))}`);
  };

  const toggleSearch = () => {
    setShow(!show);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    router.push(`/${category}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQueryFromUrl = decodeURIComponent(searchParams.get("search") || "");
    setSearchQuery(searchQueryFromUrl);
  }, []); // Empty dependency array for componentDidMount behavior
console.log('searchQuery',searchQuery);
  return (
    <div className="mx-auto flex flex-col sm:flex-row justify-between items-center">
      <ul className="flex space-x-4 mt-4 mb-2 sm:mb-0">
        <span
          className={`text-white hover:text-red-400 cursor-pointer ${
            activeCategory === "all" ? "text-red-400" : ""
          }`}
          onClick={() => handleCategoryClick("/")}
        >
          All Posts
        </span>
        <span
          className={`text-white hover:text-red-400 cursor-pointer ${
            activeCategory === "poems" ? "text-red-400" : ""
          }`}
          onClick={() => handleCategoryClick("poems")}
        >
          Poems
        </span>
        <span
          className={`text-white hover:text-red-400 cursor-pointer ${
            activeCategory === "short-stories" ? "text-red-400" : ""
          }`}
          onClick={() => handleCategoryClick("short-stories")}
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

export default PostNavSearch;

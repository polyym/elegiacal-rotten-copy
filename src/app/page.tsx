"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import NavBottom from "@/components/secondNav";
import {
  ALLPost,
  PoemPost,
  PoemSeachPost,
  Posts,
  SearchPosts,
} from "@/components/post";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import Stories from "@/components/Stories";
import { PostProps } from "@/types";
import Head from "next/head";
import PostNavBottom from "@/components/postNavBar";

export default function Home() {
  const poemsRef = useRef<HTMLDivElement>(null);
 
  const [filteredPosts, setFilteredPosts] = useState<PostProps[]>([]);
  console.log("filteredPosts", filteredPosts);
  const scrollToPoems = () => {
    poemsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex  min-h-screen flex-col ">
      <Head>
        <link rel="icon" href="/images/ellegiacally_rotten_favicon.ico" />
      </Head>
      <div
        className="bg-cover h-[700px] w-full bg-center"
        style={{
          backgroundImage: "url('/images/home_1_ellegiacally_rotten.jpg')",
        }}
      >
       
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="flex relative flex-col items-center bottom-0  w-full"
        >
          <h1
            style={{ fontFamily: "courier new" }}
            className="text-[#dee5e3]  text-center text-3xl sm:text-7xl sm:tracking-[0.5rem]	  sm:leading-relaxed"
          >
            elegiacal & rotten
          </h1>
          <p
            style={{ fontFamily: "Raleway" }}
            className="text-[#dee5e3]  text-2xl "
          >
            Expression through words.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="flex flex-row max-md:justify-center items-center md:mx-[13rem] mt-[15rem] gap-2"
        >
          <Button
            variant="default"
            onClick={scrollToPoems}
            className="rounded-none p-6 border-white hover:bg-[#898a8a]"
          >
            Poems
          </Button>

          <Link
            className="rounded-none p-[10px] bg-transparent border border-white hover:bg-white hover:text-black"
            href={"/support"}
          >
            Reach Out
          </Link>
        </motion.div>
      </div>
      <div
        className="md:bg-right-bottom md:h-[800px] md:py-[70px] w-full bg-cover"
        style={{
          backgroundImage: "url('/images/home_2_ellegiacally_rotten.jpg')",
        }}
      >
        <div>
          <div>
            <ALLPost />
          </div>
        </div>
      </div>
      <div
        ref={poemsRef}
        className="flex  bg-cover flex-col bg-right-top  md:h-[2700px]  w-full"
        style={{
          backgroundImage: "url('/images/home_3_ellegiacally_rotten.jpg')",
        }}
      >
        <div className=" mx-auto flex justify-between">
          <PostNavBottom
          
            setFilteredPosts={setFilteredPosts}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            {filteredPosts?.length > 0 ? (
              <>
                
                  <SearchPosts posts={filteredPosts} />
               
              
                
              </>
            ) : (
              <>
              <Posts />
               
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

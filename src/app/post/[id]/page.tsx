"use client";
import PostNavSearch from "@/components/detailsSearch";
import { ALLPost } from "@/components/post";
import { PostProps } from "@/types";
import { posts } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string; title: string } }) => {
  const [post, setPost] = useState<PostProps | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    const selectedPost = posts.find((p) => p.id === params.id);
    setPost(selectedPost || null);
  }, [params.id]);

  if (!post) {
    return (
      <div className="flex justify-center my-10 text-center">
        Post not found
      </div>
    );
  }

  return (
    <main className="relative overflow-y-auto h-screen">
      <div
        className="bg-cover bg-center fixed top-0 left-0 w-full h-full z-[-1]"
        style={{
          backgroundImage: `url('/images/post_ellegiacally_rotten.jpg')`,
        }}
      ></div>

      <div
        className="absolute inset-0 flex flex-col md:my-32 justify-between overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
        }}
      >
        <PostNavSearch setFilteredPosts={setFilteredPosts} />

        <div className="w-full my-8 px-4 md:w-[900px] md:mx-auto gap-2 text-[#dee5e3]">
          <div className="my-10 items-center gap-3 flex flex-row">
            <Image
              className="rounded-full"
              src={post?.author?.image}
              alt="support"
              width={50}
              height={50}
            />
            <span className="text-md font-sans">{post?.author?.name}</span>

            <span className="w-[5px] h-[5px] bg-[#dee5e3] rounded-full mt-1"></span>
            <span className="font-sans">{post?.date}</span>
            <span className="w-[5px] h-[5px] bg-[#dee5e3] rounded-full mt-1 "></span>
            <span className="font-sans">{post?.timeRead} Read</span>
          </div>
          <div className="pb-10 gap-4 flex flex-col justify-start items-center">
            <h2
              className="flex text-3xl md:mr-auto md:text-5xl md:ml-10 tracking-[0.2rem] leading-relaxed"
              style={{ fontFamily: "courier New" }}
            >
              {post?.title}
            </h2>
            <p
              className="text-lg mt-10 leading-relaxed"
              style={{ whiteSpace: "pre-line" }}
            >
              {post?.content}
            </p>
          </div>

          <div className="flex mx-auto max-md:my-3 justify-between">
            <Link href="/">Recent Posts</Link>
            <Link href="/">See All</Link>
          </div>

          <div className="max-md:relative">
            <ALLPost />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

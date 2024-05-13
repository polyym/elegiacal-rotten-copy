"use client";
import { poems, posts, stories } from "@/utils/helper";
import React from "react";
import CustomCard from "./CustomCard";

import { PostProps } from "@/types";
import Poem from "./Poem";

export const ALLPost = () => {
  // const sortedPosts = [...posts].sort((a, b) => (b.id as unknown as number) - (a.id as unknown as number));
  const reversedPosts = [...posts].reverse();

  return (
    <div className="flex justify-center space-y-2 gap-8 items-center sm:py-10">
      <div className="grid sm:grid-cols-2 gap-6">
        {posts.slice(0, 2).map((post) => {
          return (
            <div key={post.id}>
              <CustomCard
                imageUrl={post.coverImage}
                category={post.author.name}
                readTime={post.timeRead}
                type={post.type}
                title={post.title}
                date={post.date}
                id={post.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Posts = () => {
  // const sortedPosts = [...posts].sort((a, b) => (b.id as unknown as number) - (a.id as unknown as number));
  const reversedPosts = [...posts].reverse();
  return (
    <div className="flex justify-center space-y-2 gap-8 items-center sm:py-10">
      <div className="grid sm:grid-cols-2 gap-6">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <CustomCard
                imageUrl={post.coverImage}
                category={post.author.name}
                readTime={post.timeRead}
                type={post.type}
                title={post.title}
                date={post.date}
                id={post.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const SearchPosts = ({posts }: { posts: PostProps[] }) => {
  // const sortedPosts = [...posts].sort((a, b) => (b.id as unknown as number) - (a.id as unknown as number));
 const  reversedPosts = [...posts].reverse();
  return (
    <div className="flex justify-center space-y-2 gap-8 items-center sm:py-10">
      <div className="grid sm:grid-cols-2 gap-6">
        {reversedPosts.map((post) => {
          return (
            <div key={post.id}>
              <CustomCard
                imageUrl={post.coverImage}
                category={post.author.name}
                readTime={post.timeRead}
                type={post.type}
                title={post.title}
                date={post.date}
                id={post.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const PoemPost = () => {
  const sortedPosts = [...posts].sort((a, b) => (b.id as unknown as number) - (a.id as unknown as number));
  const  reversedPosts = [...poems].reverse();
  return (
    <div className="flex justify-center items-center ">
      <div className="grid sm:grid-cols-1">
        {reversedPosts.map((post) => {
          return (
            <div key={post.id}>
              <Poem 
                imageUrl={post.coverImage}
                des={post.des}
                readTime={post.timeRead}
                type={post.type}
                title={post.title}
                date={post.date}
                id={post.id}
                author={post.author}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const PoemSeachPost = ({posts }: { posts: PostProps[] }) => {

  return (
    <div className="flex justify-center items-center ">
      <div className="grid sm:grid-cols-1">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Poem 
                imageUrl={post.coverImage}
                des={post.des}
                readTime={post.timeRead}
                type={post.type}
                title={post.title}
                date={post.date}
                id={post.id}
                author={post.author}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const RecentPoemPost = () => {
  // const sortedPosts = [...posts].sort((a, b) => (b.id as unknown as number) - (a.id as unknown as number));
  const reversedPosts = [...posts].reverse();
  return (
    <div className="flex justify-center items-center ">
      <div className="grid sm:grid-cols-1">
        {reversedPosts.slice(0, 1).map((post) => {
          return (
            <div key={post.id}>
              <Poem 
                imageUrl={post.coverImage}
                des={post.des}
                readTime={post.timeRead}
                type={post.type}
                title={post.title}
                date={post.date}
                id={post.id}
                author={post.author}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const StoriesPost = () => {
  // const sortedPosts = [...stories].sort((a, b) => (b.id as unknown as number) - (a.id as unknown as number));
  const reversedStories = [...stories].reverse();
  if (stories.length > 0) {
    return (
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-1">
          {reversedStories.map((post) => (
            <div key={post.id}>
              <Poem 
                imageUrl={post.coverImage}
                des={post.des}
                readTime={post.timeRead}
                type={post.type}
                title={post.title}
                date={post.date}
                id={post.id}
                author={post.author}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex flex-col container rounded-sm bg-red-50 my-10 justify-center items-center w-[350px] h-[300px] md:w-[60%] md:h-[500px]'
        style={{backgroundImage: "url('/images/post_ellegiacally_rotten.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}
      >
        <h3 className='text-3xl text-text-[#bab6b6]'>Coming soon</h3>
        <p className='text-md text-[#bab6b6]'>Explore other categories in this blog or check back later.</p>
      </div>
    );
  }
};
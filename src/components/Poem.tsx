import { PoemProps } from "@/types";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Poem = ({
  imageUrl,
  id,
  date,
  readTime,
  title,
  type,
  des,
  author,
}: PoemProps) => {
  return (
    <div className="  px-2 py-5 m-2 w-full flex justify-center">
      <div className=" md:mx-8 md:flex md:max-w-5xl ">
        <div className="lg:w-1/2">
          <div
            className=" h-80 bg-cover  md:w-[430px] md:h-[420px]  "
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>

        <div
          className="bg-cover relative  max-md:w-[350px] p-2 h-[420px] w-[400px] bg-center"
          style={{
            backgroundImage: `url('/images/post_ellegiacally_rotten.jpg')`,
          }}
        >
          <div className="flex  flex-col  w-full">
            <div className="flex mx-4  ml-4 my-3 justify-start">
              <Image
                className="rounded-full"
                src={author?.image}
                alt="support"
                width={50}
                height={50}
              />
            </div>
            <div className="flex mx-4 ml-[80px] -mt-[40px] justify-start">
              <span className="text-[#dee5e3] text-xs font-sans">{date}</span>{" "}
              <span className="w-[5px] h-[5px] bg-[#dee5e3] rounded-full mt-1 ml-1"></span>
              <span className="text-[#dee5e3] text-xs font-sans ml-1">
                {readTime} read
              </span>
            </div>
            <div className="flex   mx-4  p-5 justify-start">
              <Link
                className="text-[#cdc8c8] hover:text-[#636565c2] font-semibold text-2xl "
                href={`/post/${id}`}
                style={{ fontFamily: "courier new" }}
              >
                {title}
              </Link>
            </div>
            <Link
              className="text-[#727171]  ml-7 text-md tracking-[0.1rem]	 leading-relaxed"
              href={`/post/${id}`}
            >
              {des}
            </Link>
            <div className=" flex md:w-[370px] max-md:w-[331px]  absolute bottom-[40px] left-4  -right-4 border-t-[0.2px] border-[#dee5e3]" />
            <div className="mx-4 flex-row absolute bottom-3 flex  items-center">
              <div className="flex flex-row space-x-2">
                <p className="text-[#dee5e3]">{type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poem;

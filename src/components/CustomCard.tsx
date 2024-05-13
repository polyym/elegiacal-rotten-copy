import { CustomCardProps } from "@/types";
import { CommandIcon, EyeIcon, HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CustomCard = ({
  imageUrl,
  category,
  date,
  readTime,
  title,
  type,
  id,
  
}: CustomCardProps) => {
  return (
    <div
      className="bg-cover relative  h-[420px] w-[300px] md:w-[420px] bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex  flex-col  w-full">
        <div className="flex mx-4  my-3 justify-start">
          <span className="text-[#dee5e3] font-sans">{category}</span>
          
        </div>
        <div className="flex mx-4  -mt-2 justify-start">
          <span className="text-[#dee5e3] text-xs font-sans">{date}</span>{" "}
          <span className="w-[5px] h-[5px] bg-[#dee5e3] rounded-full mt-1 ml-1"></span>
          <span className="text-[#dee5e3] text-xs font-sans ml-1">
            {readTime}
          </span>
        </div>
        <div className="flex absolute bottom-[52px] mx-4  -mt-2 justify-start">
          <Link
            className="text-[#cdc8c8] hover:text-[#636565c2]  text-2xl tracking-[0.1rem]	 leading-relaxed"
            href={`/post/${id}`}
            style={{fontFamily:'courier new'}}
          >
            {title}
          </Link>
        </div>
        <div className=" flex border-t-[0.2px] md:w-[380px] max-md:w-[271px]  absolute bottom-[40px] left-4  -right-4 border-[#dee5e3]" />
        <div className="mx-4 flex-row absolute bottom-3 flex  items-center">
          <div className="flex flex-row space-x-2">
           
            <p>{type}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

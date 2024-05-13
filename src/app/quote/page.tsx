"use client";
import React from "react";
import { motion } from "framer-motion";

const index = () => {
  return (
    <main className="flex  flex-col ">
      <div
        className="bg-cover  bg-center object-contain h-[700px] w-full "
       
        style={{
          backgroundImage: "url('/images/quote_2_ellegiacally_rotten.jpg')",
          // width: "1559px",
          height: "440px",

          backgroundRepeat: "repeat",
          objectFit: "cover",
          backgroundPosition: "right center",
         
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="flex flex-col justify-center items-center my-[100px] max-md:justify-center max-md:items-center "
        >
          <h6
            className="text-[#dee5e3]   text-1xl tracking-[0.2rem]	line-height-[1.5rem]  leading-relaxed"
            style={{ fontFamily: "Raleway" }}
          >
            “We don&apos;t see things as they are,we <br />{" "}
            <span
              className="flex leading-relaxed  text-[#dee5e3]  justify-center "
              style={{ fontFamily: "Raleway" }}
            >
              see them as we are.”{" "}
            </span>
          </h6>

          <p className="leading-relaxed my-4 text-[#dee5e3] font-sans">
            Anaïs Nin
          </p>
        </motion.div>
      </div>
      <div
        className="h-[700px]  w-full bg-cover bg-right-bottom"
        style={{
          backgroundImage: "url('/images/quote_1_ellegiacally_rotten.jpg')",
            backgroundSize: 'auto',
          backgroundRepeat: "repeat",
          height: "740px",
          backgroundPosition: "left center",
        }}
      ></div>
    </main>
  );
};

export default index;

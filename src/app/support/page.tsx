"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Index = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!name) {
      setNameError("Please enter your name");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!message) {
      setMessageError("Please enter your message");
      return;
    }

    // If validation passes, proceed with the form submission
    const data = {
      name,
      email,
      message,
    };
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // Reset state values
    setName("");
    setEmail("");
    setMessage("");
    // Clear validation errors
    setNameError("");
    setEmailError("");
    setMessageError("");
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div
        className=" img-fix bg-cover bg-center h-[1200px] w-full relative"
        style={{
          backgroundImage: "url('/images/support_2_ellegiacally_rotten.jpg')",
          
        }}
      >
        <div className="flex sm:mx-12 justify-center text-center ">
          <Image
            className="rounded-full"
            src="/images/support_1_ellegiacally_rotten.jpg"
            alt="support"
            width={250}
            height={350}
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="my-10 text-5xl tracking-[0.2rem] leading-relaxed"
        >
          <h1
            style={{ fontFamily: "courier new" }}
            className="text-[#dee5e3] my-10 text-center text-3xl sm:text-4xl tracking-[0.2rem] leading-relaxed"
          >
            Contact Me
          </h1>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="sm:w-[40%] gap-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <Input
              placeholder="Name"
              className={`border border-gray-300 ${nameError && "border-red-500"} p-2 sm:w-full rounded-none focus:border-transparent bg-transparent focus:outline-none h-16`}
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameError(name ? "" : "Please enter your name")}
              type="text"
              required
            />
          </div>

          <div className="mb-6">
            <Input
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() =>
                setEmailError(
                  email.trim() ? "" : "Please enter a valid email address"
                )
              }
              className={`border border-gray-300 ${emailError && "border-red-500"} p-2 sm:w-full rounded-none focus:border-transparent bg-transparent focus:outline-none h-16`}
              type="email"
              required
            />
          </div>

          <div className="mb-6">
            <Input
              placeholder="What's on your mind?"
              className={`border border-gray-300 ${messageError && "border-red-500 bg-black"} p-2 sm:w-full rounded-none focus:border-transparent bg-transparent focus:outline-none h-[150px]`}
              name="What's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() =>
                setMessageError(message ? "" : "Please enter your message")
              }
              type="textarea"
              required
            />
          </div>
          <div className="flex text-center justify-center">
            <Button
              variant="default"
              type="submit"
              className="p-6 h-13 rounded-none border-white font-bold py-5 px-6 hover:bg-[#898a8a]"
            >
              Send
            </Button>
          </div>
        </motion.form>

        <div className="flex container md:my-32 w-full mx-auto flex-col items-center"
        style={{padding:'inherit'}}>
          <h1 className="text-[#dee5e3] text-center text-3xl sm:text-4xl tracking-[0.2rem] leading-relaxed my-6">
            Resources
          </h1>

          <div className="containermax-md:p-inherit w-full mx-auto my-12 m-2 gap-12 flex flex-wrap justify-between">
            <div className="border text-center transition-transform duration-300 ease-in-out hover:transform hover:scale-110 flex items-center rounded-md border-white">
              <Link
                href="https://www.samaritans.org/how-we-can-help/contact-samaritan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 h-13 rounded-md border-5 text-gray-200 font-bold py-5 px-6"
              >
                Samaritans
              </Link>
            </div>

            <div className="border text-center flex items-center transition-transform duration-300 ease-in-out hover:transform hover:scale-110 rounded-md border-white">
              <Link
                href="https://www.nhs.uk/service-search/mental-health/find-an-NHS-talking-therapies-service"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 h-13 rounded-md border-5 text-gray-200 font-bold py-5 px-6"
              >
                Therapy
              </Link>
            </div>

            <div className="border text-center flex items-center transition-transform duration-300 ease-in-out hover:transform hover:scale-110 rounded-md border-white">
              <Link
                href="https://ukna.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 h-13 rounded-md border-5 text-gray-200 font-bold py-5 px-6"
              >
                UKNA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

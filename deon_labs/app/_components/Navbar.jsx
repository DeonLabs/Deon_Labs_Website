"use client";
import MediaQuery from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import React from "react";


function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-black fixed left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-[32px] rounded-t-none border-none px-[4%] py-[10px] ">
      <MediaQuery minWidth={1280}>
        <div className="flex h-[8vh] w-[80vw] lg:w-[70vw] lg:h-[16vh]   flex-row items-center justify-between">
          {/* bg-[#0a0a0a] lg:h-[16vh] "> */}
          <a href="/">
          <Image
            src="/logo_desktop.png"
            width={394}
            height={144}
            className="z-3 h-[24px] w-[64px] lg:h-[36px] lg:w-[96px]"
            alt=""
          />
          </a>
          
          <div className="flex flex-row items-center gap-x-[40px] font-tektur font-bold">
            <a href="About" className="hover:text-[#8F00FF]">
              ABOUT US
            </a>
            <a href="#" className="hover:text-[#8F00FF]">
              SERVICES
            </a>
            <a href="/Community" className="hover:text-[#8F00FF]">
              COMMUNITY
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-white px-6 py-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <div className={!show?"flex h-[8.5vh] w-[80vw] lg:h-[7vh]   flex-row items-center justify-between":"flex h-[8.5vh] w-[80vw] lg:h-[7vh] flex-row items-center justify-between relative left-[10%]"}>
          {/* bg-[#0a0a0a] lg:h-[16vh] "> */}
          <a href="/">
          <Image
            src="/logo_desktop.png"
            width={394}
            height={144}
            className="z-3 h-[24px] w-[64px] lg:h-[36px] lg:w-[96px]"
            alt=""
          />
          </a>
          
          <Image
            src={!show?"/right-nav.png":"/cross.png"}
            className="h-[24px] w-[24px]"
            width={72}
            height={72}
            alt=""
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              className="animate-fade-down animate-once animate-ease-in-out mt-[20%] mx-[5px] flex flex-col text-center my-[10%] lg:my-[5%] lg:text-lg gap-y-[6%] pb-5 text-sm text-white transition-all h-[100vh] w-[100vw]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <a href="/About" className="hover:text-[#8F00FF] font-tektur text-2xl ">
              ABOUT US
            </a>
            <a href="#" className="hover:text-[#8F00FF] font-tektur text-2xl">
              SERVICES
            </a>
            <a href="/Community" className="hover:text-[#8F00FF]  font-tektur text-2xl">
              COMMUNITY
            </a>
            <a
              href="#"
              className="border-2 border-white transition-all ml-[25%] w-[50vw] text-center duration-300 ease-in-out  hover:bg-white text-xs md:text-sm py-2 px-[2%] rounded-full hover:text-black font-tektur font-semibold text-2xl"
            >
              CONTACT US
            </a>
            </motion.div>
          )}
        </AnimatePresence>
      </MediaQuery>
    </nav>
  );
}

export default Navbar;


"use client";
import MediaQuery from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import React from "react";


function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-black fixed left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-[32px] rounded-t-none border-none px-[4%] py-[10px]">
      <MediaQuery minWidth={1024}>
        <div className="flex h-[8vh] w-[80vw] lg:w-[70vw] lg:h-[15vh] flex-row items-center justify-between">
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
        <div className="flex h-[6vh] w-[80vw] flex-row items-center justify-between">
          {/* bg-[#0a0a0a] lg:h-[16vh] "> */}
          <Image
            src="/logo_desktop.png"
            width={394}
            height={144}
            className="z-3 h-[24px] w-[64px] lg:h-[36px] lg:w-[96px]"
            alt=""
          />
          <Image
            src="/right-nav.png"
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
              className="animate-fade-down animate-once animate-ease-in-out mx-[5px] flex flex-col gap-y-4 pb-5 text-sm text-white transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <a href="/About" className="hover:text-[#8F00FF] font-tektur">
              ABOUT US
            </a>
            <a href="#" className="hover:text-[#8F00FF] font-tektur">
              SERVICES
            </a>
            <a href="/Community" className="hover:text-[#8F00FF]  font-tektur">
              COMMUNITY
            </a>
            <a
              href="#"
              className="border-2 border-white transition-all text-center duration-300 ease-in-out  hover:bg-white hover:text-black text-xs md:text-sm py-2 px-4 rounded-full hover:bg-white hover:text-black font-tektur font-semibold"
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


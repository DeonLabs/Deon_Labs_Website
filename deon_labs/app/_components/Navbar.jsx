"use client";
import MediaQuery from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="glass fixed left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-[32px] rounded-t-none border px-[4%] py-[10px]">
      <MediaQuery minWidth={1024}>
        <div className="flex h-[8vh] w-[80vw] flex-row items-center justify-between">
          {/* bg-[#0a0a0a] lg:h-[16vh] "> */}
          <Image
            src="/logo_desktop.png"
            width={394}
            height={144}
            className="z-3 h-[24px] w-[64px] lg:h-[36px] lg:w-[96px]"
            alt=""
          />
          <div className="flex flex-row items-center gap-x-[40px] font-tektur font-bold">
            <a href="#" className="hover:text-[#FF306E]">
              ABOUT US
            </a>
            <a href="#" className="hover:text-[#FF306E]">
              SERVICES
            </a>
            <a href="#" className="hover:text-[#FF306E]">
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
              className="animate-fade-down animate-once animate-ease-in-out mx-[5px] flex flex-col gap-y-4 pb-5 text-2xl text-white transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <a href="#mission" className="font-tektur hover:text-[#FF306E]">
                Mission
              </a>
              <a href="#partners" className="font-tektur hover:text-[#FF306E] ">
                Partners
              </a>
              <a href="#team" className="font-tektur hover:text-[#FF306E]">
                Our Team
              </a>
              <a href="#social" className="font-tektur hover:text-[#FF306E]">
                Social
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </MediaQuery>
    </nav>
  );
}

export default Navbar;


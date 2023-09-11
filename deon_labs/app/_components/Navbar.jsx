"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div className="fixed top-0 z-10 py-[1%] px-[4%] ">
            <div className="border border-none rounded-full w-[90vw] h-[8vh] flex flex-col justify-evenly bg-[#0a0a0a] lg:h-[16vh] ">
                <Image
                    src="/logo_desktop.png"
                    width={192}
                    height={72}
                    className="h-[30%] w-[15%] mx-[5%] md:h-[50%] "
                    alt=""
                />
            </div>
        </div>
    );
}

export default Navbar;


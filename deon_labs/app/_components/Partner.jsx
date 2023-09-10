"use client";
import React from "react";
import { useState } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";
import { isMobile } from "react-device-detect";

function Partner() {
    const imgs = [
        "BINANCE.png",
        "CHAINLINK.png",
        "FILECOIN.png",
        "POLYGON.png",
        "SHARDEUM.png",
        "SOLANA.png",
        "TOPL.png",
    ];
    const [speed, setSpeed] = useState(20);

    let width = 144,
        height = 160;

    if (isMobile) {
        width = 72;
        height = 80;
    }

    return (
        <div className="px-8 py-8 relative top-[4rem] min-h-[40vh] flex flex-col ticker-wrapper">
            <h1 className="text-center font-tektur text-3xl md:text-4xl">
                Our Partners
            </h1>

            <p className="text-center font-tektur text-xs md:text-xs mt-4">
                We contributed to building a revolutionary ecosystem for some of
                the leading
            </p>

            {/* now the scroll  */}
            <div className="mt-10">
                <Ticker
                    duration={speed}
                    onMouseEnter={() => setSpeed(10)}
                    onMouseLeave={() => setSpeed(5)}>
                    {imgs.map((item, index) => (
                        <Image
                            key={index}
                            className="mx-6 w-[72px] h-[80px] md:w-[144px] md:h-[160px]"
                            width={isMobile ? 72 : 144}
                            height={isMobile ? 80 : 160}
                            src={`/partners/${item}`}
                            alt={item}
                        />
                        // <div
                        //     key={index}
                        //     style={{
                        //         backgroundColor: item,
                        //         margin: "5px",
                        //         height: "250px",
                        //         width: "200px",
                        //     }}
                        // />
                    ))}
                </Ticker>
            </div>

            <div></div>
        </div>
    );
}

export default Partner;

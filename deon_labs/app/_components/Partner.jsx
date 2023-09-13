"use client";
import React from "react";
import { useState } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";

function Partner() {
  const def = [
    "BINANCE",
    "CHAINLINK",
    "FILECOIN",
    "POLYGON",
    "SHARDEUM",
    "SOLANA",
    "TOPL",
  ];
  const [imgs, setImgs] = useState([
    "BINANCE",
    "CHAINLINK",
    "FILECOIN",
    "POLYGON",
    "SHARDEUM",
    "SOLANA",
    "TOPL",
  ]);

  return (
    <div className="ticker-wrapper relative top-[4rem] flex min-h-[40vh] flex-col px-[15%] py-8 lg:py-[10%]">
      <h1 className="text-center font-tektur font-semibold text-3xl md:text-4xl lg:text-5xl">
        Our Partners
      </h1>

      <p className="mt-4 text-center font-tektur text-xs md:text-xs">
        We contributed to building a revolutionary ecosystem for some of the
        leading 
      </p>

      {/* now the scroll  */}
      <div className="mt-10">
        <Ticker duration={15}>
          {imgs.map((item, index) => (
            <Image
              key={index}
              className="mx-6 h-[80px] w-[72px] md:h-[160px] md:w-[144px]"
              width={144}
              height={160}
              src={`/partners/${item}.png`}
              onMouseOver={() => {
                // console.log("hi");

                const tmp = Array.from(imgs);
                if (tmp[index] !== def[index]) {
                  tmp[index] = def[index];
                } else {
                  tmp[index] = `${item}2`;
                }
                setImgs(tmp);
              }}
              onMouseOut={() => {
                // console.log("byee");

                const tmp = Array.from(imgs);
                tmp[index] = item;
                setImgs(tmp);
              }}
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

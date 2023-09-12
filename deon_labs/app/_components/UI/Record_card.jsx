import React from "react";

function Card({ number, type }) {
  return (
    <div className="mb-[2%] mt-[5%] flex  h-[20vh] w-[80vw] flex-col justify-evenly rounded-xl border border-gray-500 bg-black drop-shadow-xl md:mx-[4%] md:h-[15vh] lg:h-[25vh] lg:w-[25vw]">
      <img src="./Rectangle 60.svg" className="h-[20%] " alt="" />
      <h1 className="font-tektur text-2xl font-semibold ">{number}</h1>
      <h1 className="py-[0.5%] text-2xl font-tektur opacity-50">{type}</h1>
    </div>
  );
}

export default Card;

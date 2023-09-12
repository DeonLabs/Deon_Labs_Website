import React from "react";

function Callout() {
  return (
    <div className="flex flex-col gap-y-[2vh] md:justify-center md:flex-row  md:gap-x-[5%] px-[20%]">
     
    <button class=" border-2 border-black bg-white text-black transition-all font-bold duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white  text-xs md:text-sm py-2 px-4 rounded-full font-tektur lg:py-4 lg:px-8">
    Build Web3 Ecosystem
    </button>
    <button class=" border-2 border-white transition-all font-bold duration-300 ease-in-out  hover:bg-white hover:text-black text-xs md:text-sm py-2 px-4 rounded-full font-tektur lg:py-4 lg:px-8">
    Build Web3 Ecosystem
    </button>
    </div>
    
  );
}

export default Callout ;

// 
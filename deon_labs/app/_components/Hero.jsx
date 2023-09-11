import React from "react";
import Navbar from "./Navbar";
import Callout from "./UI/Callout";

function Hero() {
  return (
    <div className="flex min-h-[60vh] w-[100vw] flex-col space-y-[3%] bg-hero-pattern-mobile bg-cover bg-no-repeat md:bg-hero-pattern-tablet lg:min-h-[75vh] lg:bg-hero-pattern">
      {/* <Navbar/> */}
      <div>
        <h1 className="relative top-[12rem] text-center font-tektur text-[2.07375rem] font-[700] md:top-[18rem]  md:text-[2.488rem]  lg:top-[25rem] lg:text-[3.58rem]  ">
          Web3 ecosystem enabler
        </h1>
        <p className="relative top-[14rem] px-[2%] text-center font-tektur text-[0.694375rem] opacity-50 md:top-[20rem] md:px-[6rem] md:text-[0.833125rem] lg:top-[27rem] lg:text-[1.2rem]  ">
          Deon Labs is your in-house web3 ecosystem builder driving paradigm
          shifts into web3 ecosystems
        </p>
      </div>
      <Callout />
    </div>
  );
}

export default Hero;

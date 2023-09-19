import React from "react";
import Image from "next/image";
import Service from "./UI/Service";

function Services({heading , desc}) {
  return (
    <div className="mt-[15%] flex flex-col space-y-[6%] py-[1%] font-black md:px-[0.25%] lg:px-[12%]  ">
      
      <div>
        <h1 className="text-center font-tektur text-[1.728rem] font-semibold md:text-[2.07rem] lg:text-[3.58rem] ">
         {heading}
        </h1>
        <p className="md:[0.83rem] px-[5%] text-center  font-tektur text-[0.694rem] font-[400] opacity-50 lg:text-[1rem]">
          {desc}
        </p>
      </div>
      <img src="./Group 2340.png" className="absolute lg:right-[0.05%] w-[100%]" alt="" />
      <div className="relative flex flex-col gap-y-[2%] space-y-[4%] lg:grid lg:grid-cols-2 lg:space-y-[0px] lg:gap-y-[7%]  ">
      
        <Service
          heading={"Full service launch and growth"}
          desc={
            "Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "
          }
        />
        <Service
          heading={"Full service launch and growth"}
          desc={
            "Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "
          }
        />
        <Service
          heading={"Full service launch and growth"}
          desc={
            "Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "
          }
        />
        <Service
          heading={"Full service launch and growth"}
          desc={
            "Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "
          }
        />
      </div>
    </div>
  );
}

export default Services;
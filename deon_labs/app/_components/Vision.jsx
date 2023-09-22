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
      <div></div>
      <img src="./Group 2340.png" className="absolute invisible lg:visible lg:right-[0.05%] w-[100%] lg:py-[8%] xl:py-[0.5%]" alt="" />
      
      <div className=" flex flex-col gap-y-[5%] space-y-[10%] lg:grid lg:grid-cols-2 lg:space-y-[0%] lg:gap-y-[4%] xl:gap-y-[5%]  ">
      <img src="./Group.png" className="absolute small-phone:invisible  md:invisible  right-[0.05%] w-[100%] max-h-screen py-[0.5%] -z-20" alt="" />
      
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
      <img src="./Group.png" className="absolute md:invisible top-[150%]   small-phone:invisible  right-[0.05%] w-[100%] max-h-screen py-[0.5%] -z-20" alt="" />

        <Service
          heading={"Full service launch and growth"}
          desc={
            "Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "
          }
        />
      <img src="./Group.png" className="absolute   md:invisible  small-phone:invisible  right-[0.05%] top-[180%] w-[100%] max-h-screen py-[0.5%] -z-20" alt="" />

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
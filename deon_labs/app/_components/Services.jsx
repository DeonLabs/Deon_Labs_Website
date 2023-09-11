import React from "react";

import Service from "./UI/Service";

function Services() {
  return (
    <div className="mt-[15%] flex  flex-col space-y-[5%] py-[0.25%] font-black ">
      <div>
        <h1 className="text-center font-tektur text-[1.728rem] font-[400] md:text-[2.07rem] lg:text-[3.58rem] ">
          What Can We Do For You ?
        </h1>
        <p className="md:[0.83rem] px-[5%] text-center  font-tektur text-[0.694rem] font-[400] opacity-50 lg:text-[1rem]">
          We contributed to building a revolutionary ecosystem for some of the
          leading
        </p>
      </div>

      <div className="flex flex-col gap-y-[4%] space-y-[4%] lg:grid lg:grid-cols-2 lg:space-y-[0px] ">
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

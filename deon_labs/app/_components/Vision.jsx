import React from "react";
import Image from "next/image";
import Service from "./UI/Service";

function Vision({heading , desc}) {
  return (
    <div className="mt-[5%] flex flex-col space-y-[6%] py-[0.25%] font-black px-[4%] lg:px-[7%] lg:ml-[2%] lg:mr-[2%] ">
      <div>
        <h1 className="text-center font-tektur text-[1.728rem] font-semibold md:text-[2.07rem] lg:text-[3.58rem] ">
         Our Vision
        </h1>
        <p className="md:[0.83rem] px-[5%] text-center  font-tektur text-[0.694rem] font-[400] opacity-50 lg:text-[1rem]">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, autem. Aut quisquam exercitationem veniam velit quis adipisci distinctio id reprehenderit iusto! Placeat praesentium possimus voluptas qui recusandae aliquam quasi perspiciatis.
        </p>
      </div>

      <div className="relative flex flex-col gap-y-[4%] space-y-[4%] lg:grid lg:grid-cols-2 lg:space-y-[0px]  ">
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

export default Vision;

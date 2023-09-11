import React from "react";

function Team() {
  return (
    <div className="min-h-full">
      <div className=" overflow-none relative top-[8rem] bg-gradient md:bg-gradient-tablet md:bg-cover md:bg-center md:bg-no-repeat lg:flex lg:flex-row lg:justify-evenly lg:bg-gradient-pc lg:bg-cover">
        <div className="flex flex-col py-[6%] lg:space-y-[7%]">
          <h1 className="relative top-[9%] py-[5%] text-center font-tektur text-3xl font-bold md:text-5xl lg:text-5xl  ">
            Built By A Team From
          </h1>
          <p className="min-w-[40ch] px-[5%] text-center font-tektur text-xs md:relative md:left-[8rem] md:max-w-[50ch] md:text-lg lg:left-[2%]">
            We have assembled a team of web3 avengers from some of the leading
            web3 companies to build your dream web3 company.
          </p>
        </div>

        <img
          className="py-[0.5%] md:relative md:bottom-[5%] md:left-[5%] md:h-[80vh] md:w-[90vw] lg:left-[1%] lg:h-[80vh] lg:w-[40vw] lg:object-top xl:left-[4%] "
          src="./build_by.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Team;

import React from "react";

function Team() {
  return (
    <div className="min-h-full">
      <div className=" bg-gradient relative top-[8rem] md:bg-gradient-tablet md:bg-no-repeat md:bg-center md:bg-cover lg:bg-gradient-pc lg:bg-cover lg:flex lg:flex-row lg:justify-evenly">
        <div className="flex flex-col lg:space-y-[7%] py-[6%]"> 
        <h1 className="text-center font-tektur relative top-[9%] py-[5%] md:text-5xl font-bold text-3xl lg:text-5xl  ">
          Built By A Team From
        </h1>
        <p className="font-tektur px-[5%] text-xs text-center min-w-[40ch] md:text-lg md:max-w-[50ch] md:relative md:left-[8rem] lg:left-[2%]">
        We have assembled a team of web3 avengers from some of the leading web3 companies to build your dream web3 company.
        </p>
        </div>
        
        <img className="py-[0.5%] md:relative md:left-[10%] md:bottom-[5%] md:h-[80vh] md:w-[50vw] lg:h-[80vh] lg:w-[40vw] lg:left-[1%] xl:left-[4%] lg:object-top " src="./build_by.png" alt="" />
      </div>
    </div>
  );
}

export default Team;

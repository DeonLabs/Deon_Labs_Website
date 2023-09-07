import React from "react";

function Team() {
  return (
    <div className="min-h-full">
      <div className=" bg-gradient relative top-[8rem] md:bg-gradient-tablet md:bg-no-repeat md:bg-center md:bg-cover lg:bg-gradient-pc lg:bg-cover">
        <h1 className="text-center font-tektur relative top-[1rem] py-[2rem] md:text-5xl font-semibold text-3xl ">
          Built By A Team From
        </h1>
        <p className=" font-tektur text-xs text-center min-w-[40ch] md:text-lg md:max-w-[50ch] md:relative md:left-[8rem]">
        We have assembled a team of web3 avengers from some of the leading web3 companies to build your dream web3 company.
        </p>
        <img className="py-[3rem] md:relative md:left-[1rem] md:h-[70vh] md:w-[94vw] lg:h-[90vh] lg:w-[60vw] lg:object-top " src="./build_by.png" alt="" />
      </div>
    </div>
  );
}

export default Team;

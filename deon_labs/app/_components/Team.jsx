import React from "react";

function Team() {
  return (
    <div className="min-h-full">
      <div className=" bg-gradient relative top-[8rem] ">
        <h1 className="text-center font-tektur relative top-[1rem] py-[2rem] font-semibold text-3xl px-[1rem]">
          Built By A Team From
        </h1>
        <p className="px-[1rem] font-tektur text-xs text-center min-w-[40ch]">
        We have assembled a team of web3 avengers from some of the leading web3 companies to build your dream web3 company.
        </p>
        <img className="py-[3rem]" src="./build_by.png" alt="" />
      </div>
    </div>
  );
}

export default Team;

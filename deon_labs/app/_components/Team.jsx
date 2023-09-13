import React from "react";

function Team() {
  
  return (
    <div className="py-[20%] mt-[10%] md:mt-0 lg:py-[10%]">
      <h1 className="font-tektur text-center text-[1.2rem] leading-[2rem] space-y-[0.5rem]  md:text-2xl lg:text-4xl">
          BUILT BY A TEAM FROM
      </h1>
     <div className="flex flex-row align-center justify-evenly gap-x-[2%] border-4 border-none mx-[2%] py-[5%] px-[5%]">
      <img src="./tezoz.svg" alt className=" h-[2rem] md:h-[4rem] lg:h-[6rem]"/>
      <img src="./gari.svg" className=" h-[2rem] md:h-[4rem] lg:h-[6rem]" />
      <img src="./superteam.svg"  alt className=" h-[2rem] md:h-[4rem] lg:h-[6rem]" />
      <img src="./Router.svg" alt className=" h-[2rem] md:h-[4rem] lg:h-[6rem]" />
      <img src="./bankless.svg" alt className=" h-[2rem] md:h-[4rem] lg:h-[6rem]" />
      <img src="./dapp_list.svg" alt className=" h-[2rem] md:h-[4rem] lg:h-[6rem]" />
      <img src="./gitopia.svg" alt className=" h-[2rem] md:h-[4rem] lg:h-[6rem]"/>
      <img src="./kleros.svg" alt className=" h-[2rem] md:h-[4rem] lg:h-[6rem]" />

      </div> 
    </div>
  );
}

export default Team;

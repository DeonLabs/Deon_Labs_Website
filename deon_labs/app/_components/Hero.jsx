import React from "react";
import Navbar from "./Navbar";
import Callout from "./UI/Callout";

function Hero() {
    return (
        <div >
            {/* <Navbar/> */}
            <div className="className= bg-hero-pattern-mobile md:bg-hero-pattern-tablet lg:bg-hero-pattern w-[100vw] bg-cover bg-no-repeat flex flex-col py-[10%] space-y-[3%]">
                <div className="mt-[40%] md:mt-[30%] lg:mt-[15%]">
                <h1 className="text-center font-tektur text-[2.07375rem] md:text-[2.488rem] lg:text-[3.58rem]  md:top-[18rem]  font-[700]   ">
                    Web3 ecosystem enabler
                </h1>
                <p className=" px-[2%] text-center font-tektur opacity-50 md:px-[6rem] text-[0.694375rem] md:text-[0.833125rem] lg:text-[1.2rem] ">
                    Deon Labs is your in-house web3 ecosystem builder driving
                    paradigm shifts into web3 ecosystems
                </p>
                </div>
            <Callout />
                
            </div>
        </div>
    );
}

export default Hero;

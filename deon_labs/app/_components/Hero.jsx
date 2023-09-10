import React from "react";
import Navbar from "./Navbar";
import Callout from "./UI/Callout";

function Hero() {
    return (
        <div className="bg-hero-pattern-mobile md:bg-hero-pattern-tablet lg:bg-hero-pattern lg:min-h-[75vh] min-h-[60vh] w-[100vw] bg-cover bg-no-repeat flex flex-col space-y-[3%]">
            {/* <Navbar/> */}
            <div>
                <h1 className="relative top-[12rem] text-center font-tektur text-[2.07375rem] md:text-[2.488rem] lg:text-[3.58rem]  md:top-[18rem]  lg:top-[25rem] font-[700]  ">
                    Web3 ecosystem enabler
                </h1>
                <p className="relative px-[2%] top-[14rem] text-center font-tektur opacity-50 md:px-[6rem] text-[0.694375rem] md:text-[0.833125rem] lg:text-[1.2rem] md:top-[20rem] lg:top-[27rem]  ">
                    Deon Labs is your in-house web3 ecosystem builder driving
                    paradigm shifts into web3 ecosystems
                </p>
            </div>
            <Callout />
        </div>
    );
}

export default Hero;

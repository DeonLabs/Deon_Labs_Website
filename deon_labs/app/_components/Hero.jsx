import React from 'react'
import Navbar from './Navbar'
import Callout from './UI/Callout'
function Hero() {
    return (
        <div className="bg-hero-pattern-mobile md:bg-hero-pattern-tablet lg:bg-hero-pattern bg-cover bg-no-repeat flex flex-col py-[20%] lg:py-[15%] space-y-[3%]">
            {/* <Navbar/> */}
            <div>
                <h1 className=" text-center font-tektur text-[2.07375rem] md:text-[2.488rem] lg:text-[3.58rem] font-[700] mt-[30%] md:mt-[20%] lg:mt-[10%]  ">
                    Web3 ecosystem enabler
                </h1>
                <p className=" px-[2%]  text-center font-tektur opacity-50 md:px-[6rem] text-[0.694375rem] md:text-[0.833125rem] lg:text-[1.2rem]   ">
                    Deon Labs is your in-house web3 ecosystem builder driving <br />
                    paradigm shifts into web3 ecosystems
                </p>
            </div>
            <Callout />
        </div>
    );
}

export default Hero
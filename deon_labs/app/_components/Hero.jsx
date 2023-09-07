import React from 'react'
import Navbar from './Navbar'
function Hero() {
  return (
    <div className="bg-hero-pattern-mobile md:bg-hero-pattern-tablet lg:bg-hero-pattern lg:h-[75vh] h-[50vh] w-[100vw] bg-cover bg-no-repeat">
     <Navbar/>
    <h1 className="relative top-[12rem] text-center font-tektur text-4xl md:text-6xl md:top-[18rem] lg:text-7xl lg:top-[19rem] font-semibold ">
      Web3 ecosystem  enabler 
    </h1>
    <p className="relative px-[2%] top-[14rem] text-center font-tektur opacity-50 md:px-[6rem]  md:top-[20rem] lg:top-[21rem] lg:text-xl ">
    Deon Labs is your in-house web3 ecosystem builder  driving  paradigm shifts into web3 ecosystems
    </p>
  </div>
  )
}

export default Hero
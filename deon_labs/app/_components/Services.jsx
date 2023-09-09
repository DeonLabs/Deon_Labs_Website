import React from 'react'

import Service from './UI/Service'

function Services() {
  return (
    
      <div className='flex flex-col  py-[0.25%] mt-[15%] font-black space-y-[5%] '>
      <div>
      <h1 className='font-tektur text-[1.728rem] md:text-[2.07rem] lg:text-[3.58rem] font-[400] text-center '>What Can We Do For You ?</h1>
      <p className='font-tektur text-[0.694rem] md:[0.83rem]  lg:text-[1rem] px-[5%] text-center font-[400] opacity-50'>We contributed to building a revolutionary ecosystem for some of the leading</p>
      </div>
     
      <div className='flex flex-col gap-y-[4%] space-y-[4%] lg:grid lg:grid-cols-2 lg:space-y-[0px] '>
      <Service  heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      

      </div>
      
    </div>
    
    
  )
}

export default Services
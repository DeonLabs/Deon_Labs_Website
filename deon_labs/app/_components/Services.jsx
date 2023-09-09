import React from 'react'

import Service from './UI/Service'

function Services() {
  return (
    
      <div className='flex flex-col  py-[0.25%] mt-[15%] font-black space-y-[5%] '>
      <div>
      <h1 className='font-tektur text-2xl text-center lg:text-6xl'>What Can We Do For You ?</h1>
      <p className='font-tektur text-xs lg:text-lg px-[5%] text-center opacity-50'>We contributed to building a revolutionary ecosystem for some of the leading</p>
      </div>
     
      <div className='flex flex-col space-y-[4%] lg:grid lg:grid-cols-2 '>
      <Service  heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>
      <Service heading={"Full service launch and growth"} desc={"Deon Labs is the a web3 ecosystem enabler that helps web3 protocol to build their Web3 ecosystem. "}/>

      </div>
      
    </div>
    
    
  )
}

export default Services
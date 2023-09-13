import React from 'react'
import Navbar from '../Navbar'
import Button from '../UI/Button'
function Hero() {
  return (
    <div className="bg-Community-grad-phone md:bg-Community-grad-tab lg:bg-Community-grad bg-no-repeat bg-cover w-[100vw] py-[2%] ">
     <Navbar/>
     
     <div className='flex flex-col text-center py-[5%] space-y-[5%]'>
      <div className='mt-[40%] md:mt-[32%] lg:mt-[15%]'>
      <h1 className=" text-center font-tektur text-[2.07375rem] md:text-[2.488rem] lg:text-[3.58rem] font-[700]  ">
      WEB3 ECOSYSTEM ENABLER
    </h1>
    <p className=" px-[2%] text-center font-tektur opacity-50 md:px-[6rem] text-[0.694375rem] md:text-[0.833125rem] lg:text-[1.2rem]  ">
    Deon Labs is your in-house web3 ecosystem builder driving <br />paradigm shifts  into web3 ecosystems
    </p>    
      </div>
     
    <Button/>
     </div>
      
  
  </div>
  )
}

export default Hero
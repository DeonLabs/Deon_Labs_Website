import React from 'react'

function Service({heading , desc}) {
  return (
    <div className=''>
      <div className='border rounded-2xl bg-black border-gray-500 drop-shadow-xl min-h-[20vh] w-[85vw] align-middle relative left-[8%] lg:w-[40vw] flex flex-row'>
      <img src="./Rectangle 60.svg" className='w-[8%] relative left-[5%] bottom-[35%] md:w-[5%] md:bottom-[30%] ' alt="" />
      <div className='flex flex-col justify-normal py-[4%]'>
      <h1 className='font-tektur font-[600] text-[1.44rem] md:text-[1.72rem] lg: py-[3%] px-[9%] text-xl'>{heading}</h1>
      <p className='opacity-50 font-tektur text-[0.83rem] font-[400]  overflow-none px-[9%]'>{desc}</p>
      </div>
     
    </div>
    
    </div>
   
  )
}

export default Service
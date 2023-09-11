import React from 'react'
import Image from 'next/image'

function Built() {
  return (
    <div className='py-[10%]'>
        <h1 className = "font-tektur text-center text-[1.2rem] leading-[2rem] space-y-[0.5rem]  md:text-2xl lg:text-4xl">BUILD BY A TEAM FROM</h1>
        <div className='flex flex-row align-center justify-center gap-x-[4%] md:gap-x-[5%] border-4 border-none mx-[20%] py-[5%] '>
            <img src="./tezoz.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]' alt="" />
            <img src="./gari.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]'   alt="" />
            <img src="./superteam.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]' alt="" />
            <img src="./Router.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]' alt="" />
            <img src="./Bankless.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]' alt="" />
            <img src="./dapp_list.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]'  alt="" />
            <img src="./gitopia.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]' alt="" />
            <img src="./kleros.svg" className='h-[2rem] md:h-[4rem] lg:h-[6rem]'  alt="" />

        </div>
    </div>
  )
}

export default Built
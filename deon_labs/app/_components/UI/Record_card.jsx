import React from 'react'

function Card({data}) {
  return (
    <div className='border rounded-xl bg-black border-gray-500 drop-shadow-xl h-[25vh] w-[85vw] align-middle relative left-[10%]'>
      <h1 className='font-tektur font-[1000] py-[6%] px-[9%] text-xl'>{heading}</h1>
    </div>
  )
}

export default Card ; 
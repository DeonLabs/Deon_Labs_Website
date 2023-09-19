import React from "react";
import Card from "./UI/Record_card";

function Achievments() {
  return (
    <div className='px-[5%] py-[38%] md:py-[1%] lg:py-[2%] lg:px-[8%] lg:mr-[30%] md:mr-[45%] lg:ml-[0.125%] lg:w-[100vw]  '>
      <div className='mt-[20%] text-center flex flex-col justify-evenly rounded-lg border-4 border-none w-[85vw] h-[60vh] relative left-[3%]'>
        <div className='flex flex-col md:flex-row lg:mt-[10%] '>
        <Card number={'300+'} type={'devs'}/>
        <Card number={'10k+'} type={'impressions'}/>
        <Card number={'100+'} type={'projects'}/>
        </div>
        <img src="./Mask group.png" alt="" />
      </div>
    </div>
  );
}

export default Achievments;

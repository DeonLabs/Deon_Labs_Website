import React from "react";

function Service({ heading, desc }) {
  return (
    <>
      <div className="relative left-[8%] flex mobile:max-h-[30vh]  max-w-[86vw]  flex-row rounded-2xl border border-gray-500 bg-black align-middle drop-shadow-xl lg:w-[35vw] lg:min-h-[30vh]">
        <img
          src="./Rectangle 60.svg"
          className="relative left-[5%] h-[2rem] lg:w-[5%] mb-[90%] md:w-[5%] md:mb-36 lg:mb-[22%] md:mt-[5%] mt-[10%]"
          alt=""
        />
        <div className="flex flex-col justify-normal py-[5%] md:py-[4%] ">
          <h1 className="lg: px-[9%] py-[3%] font-tektur text-[1.44rem] text-xl font-[600] md:text-[1.72rem]">
            {heading}
          </h1>
          <p className="overflow-none px-[9%] font-tektur text-[0.83rem]  font-[400] opacity-50 md:text-2xl nest-hub:text-sm">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;

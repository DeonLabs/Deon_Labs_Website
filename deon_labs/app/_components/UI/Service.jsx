import React from "react";

function Service({ heading, desc }) {
  return (
    <>
      <div className="relative left-[8%] flex  min-h-[vh] w-[80vw] flex-row rounded-2xl border border-gray-500 bg-black align-middle drop-shadow-xl lg:w-[35vw]">
        <img
          src="./Rectangle 60.svg"
          className="relative left-[5%] w-[8%] mb-[80%] md:w-[5%] md:mb-36 lg:mb-[22%] md:mt-[5%] mt-[20%]"
          alt=""
        />
        <div className="flex flex-col justify-normal md:py-[4%] py-[15%]">
          <h1 className="lg: px-[9%] py-[3%] font-tektur text-[1.44rem] text-xl font-[600] md:text-[1.72rem]">
            {heading}
          </h1>
          <p className="overflow-none px-[9%] font-tektur text-[0.83rem]  font-[400] opacity-50 md:text-2xl">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;

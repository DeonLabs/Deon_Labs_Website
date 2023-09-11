import React from "react";

function Service({ heading, desc }) {
  return (
    <>
      <div className="relative left-[8%] flex min-h-[20vh] w-[85vw] flex-row rounded-2xl border border-gray-500 bg-black align-middle drop-shadow-xl lg:w-[40vw]">
        <img
          src="./Rectangle 60.svg"
          className="relative bottom-[35%] left-[5%] w-[8%] md:bottom-[30%] md:w-[5%] "
          alt=""
        />
        <div className="flex flex-col justify-normal py-[4%]">
          <h1 className="lg: px-[9%] py-[3%] font-tektur text-[1.44rem] text-xl font-[600] md:text-[1.72rem]">
            {heading}
          </h1>
          <p className="overflow-none px-[9%] font-tektur text-[0.83rem]  font-[400] opacity-50">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;

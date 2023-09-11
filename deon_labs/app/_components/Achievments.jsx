import React from "react";
import Card from "./UI/RecordCard";

function Achievments() {
  return (
    <div className="px-[3%] py-[10%] ">
      <div className="relative left-[3%] mt-[30%] flex h-[60vh] w-[90vw] flex-col justify-evenly rounded-lg border-4  border-none text-center">
        <div className="flex flex-col md:flex-row ">
          <Card number={"300+"} type={"devs"} />
          <Card number={"10k+"} type={"impressions"} />
          <Card number={"100+"} type={"projects"} />
        </div>
        <img src="./Mask group.png" alt="" />
      </div>
    </div>
  );
}

export default Achievments;

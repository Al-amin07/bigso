import React from "react";
import purple from "@/assets/ep1.png";
import yellow from "@/assets/ep2.png";
import green from "@/assets/ep3.png";
export default function WrapperBackground({
  children,
}: {
  children: React.ReactNode;
  //   top?: string;
  //   left?: string;
  //   right?: string;
}) {
  return (
    <div className="min-h-[500px]  w-full bg-transparent backdrop-blur-2xl relative">
      <div className="absolute   -top-[40%] -left-[50px]">
        <img src={purple} alt="" />
      </div>

      <div
        className="absolute 
       -top-[40%] right-0"
      >
        <img src={yellow} alt="" />
      </div>
      <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 ">
        <img src={green} alt="" />
      </div>
      <div className="relative z-20 max-w-[1340px] mx-auto">{children}</div>
    </div>
  );
}

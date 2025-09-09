import React from "react";
interface IProps {
  children: React.ReactNode;
  image: string;
}
export default function ImageBackground({ image, children }: IProps) {
  return (
    <div>
      <div className="relative h-[700px] overflow-hidden">
        <div>
          <img
            src={image}
            alt="Images"
            className="absolute w-full  inset-0 shadow-2xl filter blur-sm"
          />
        </div>

        {/* Overlay */}
        <div className="absolute bg-black/05 inset-0 w-full h-full  backdrop-blur-sm"></div>
        {/* Content */}
        <div className="relative z-20  mt-64">{children}</div>
      </div>
    </div>
  );
}

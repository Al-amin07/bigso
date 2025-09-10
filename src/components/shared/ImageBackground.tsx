import React from "react";
interface IProps {
  children: React.ReactNode;
  image: string;
}
export default function ImageBackground({ image, children }: IProps) {
  return (
    <div>
      <div className="relative lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full shadow-2xl">
          <img
            src={image}
            alt="Images"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/10 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-20 mt-60 lg:mt-64">{children}</div>
      </div>
    </div>
  );
}

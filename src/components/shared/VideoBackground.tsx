import type React from "react";
interface VideoBackgroundProps {
  videoSrc: string;
  children: React.ReactNode;
}

export function VideoBackground({ videoSrc, children }: VideoBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 shadow-2xl filter blur-sm w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        <div className="flex items-center justify-center h-full text-white text-lg">
          Your browser does not support the video tag.
        </div>
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full  backdrop-blur-sm"></div>
      {/* Content */}
      <div className="relative z-20  mt-64">{children}</div>
    </div>
  );
}

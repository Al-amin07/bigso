import ImageBackground from "@/components/shared/ImageBackground";
import image from "@/assets/privacy.jpg";
import TermsOfServiceScroll from "./TermScroll";

export default function TermsOfService() {
  return (
    <div>
      <ImageBackground image={image}>
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-[64px] leading-tight max-w-3xl text-white mx-auto  font-bold">
            Because Even Weirdness Needs Some
            <span className="text-[#E5025C]">Rules</span>
          </h1>
          <p className="text-white mt-6 text-xl  mb-16 lg:mb-0 lg:text-2xl font-medium max-w-5/6 mx-auto">
            Strange finds, silly fun, and… legal disclaimers. Read on, it won’t
            hurt (much).
          </p>
        </div>
      </ImageBackground>
      <TermsOfServiceScroll />
    </div>
  );
}

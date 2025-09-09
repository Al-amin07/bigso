import ImageBackground from "@/components/shared/ImageBackground";
import faqImage from "@/assets/faq.jpg";
export default function Faq() {
  return (
    <div>
      <ImageBackground image={faqImage}>
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-[64px] leading-tight max-w-[900px]  mx-auto text-white font-bold">
            Because Even Weirdness Needs Some
            <span className="text-[#E5025C]"> Rules</span>
          </h1>
          <p className="text-white mt-6 text-2xl font-medium max-w-5/6 mx-auto">
            Strange finds, silly fun, and… legal disclaimers. Read on, it won’t
            hurt (much).
          </p>
        </div>
      </ImageBackground>
    </div>
  );
}

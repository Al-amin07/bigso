import ImageBackground from "@/components/shared/ImageBackground";
import aboutImage from "@/assets/about.jpg";
import OutStory from "./OurStory";
import TaleofBagiland from "./TaleofBagiland";

const About = () => {
  return (
    <div className="space-y-[100px]">
      <ImageBackground image={aboutImage}>
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-[64px] leading-tight max-w-3xl mx-auto text-[#E5025C] font-bold">
            The Story Behind <br /> The{" "}
            <span className="text-white">Weirdness</span>
          </h1>
          <p className="text-white mt-6 text-xl  mb-16 lg:mb-0 lg:text-2xl font-medium max-w-5/6 mx-auto">
            We're not just another e-commerce site. We're a carefully curated
            collection of the world's most wonderfully weird products.
          </p>
        </div>
      </ImageBackground>
      <div className="space-y-[100px] px-5">
        <OutStory />
        <TaleofBagiland />
      </div>
      {/* <AboutDetails /> */}
    </div>
  );
};

export default About;

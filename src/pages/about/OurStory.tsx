import { FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";
import InfoCard from "./InfoCard";
import TextHeader from "@/components/shared/TextHeader";

// Story Section
const OutStory = () => {
  return (
    <div className="max-w-5xl w-full mx-auto bg-white/70 ">
      <TextHeader
        title="  Our Story"
        desc=" It all started with a rubber chicken and a dream..."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          icon={<FaLightbulb />}
          title="The Idea"
          description="In 2024, our founder Emily Chen discovered a toilet-shaped coffee mug that changed her perspective on everyday objects forever."
          bgColor="bg-[#F7E7F9]"
          textColor="text-[var(--color-brand)]"
        />
        <InfoCard
          icon={<FaUsers />}
          title="The Team"
          description="We assembled a team of professional weirdos who share our passion for finding the most unusual yet practical products."
          bgColor="bg-[#FEF4CB]"
          textColor="text-[var(--color-brand)]"
        />
        <InfoCard
          icon={<FaHeart />}
          title="The Community"
          description="Today, we're a global community of weird-product enthusiasts, united by our love for the unconventional."
          bgColor="bg-[#D4F3FE]"
          textColor="text-[var(--color-brand)]"
        />
      </div>
    </div>
  );
};
export default OutStory;

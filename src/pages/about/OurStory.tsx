import { FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";
import InfoCard from "./InfoCard";

// Story Section
const OutStory = () => {
  return (
    <div className="max-w-5xl w-full mx-auto bg-white/70 ">
      <h2 className="text-5xl font-bold text-[#9B4DCA] text-center mb-6">
        Our Story
      </h2>
      <p className="text-center text-gray-600 mb-12">
        It all started with a rubber chicken and a dream...
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <InfoCard
          icon={<FaLightbulb />}
          title="The Idea"
          description="In 2024, our founder Emily Chen discovered a toilet-shaped coffee mug that changed her perspective on everyday objects forever."
          bgColor="bg-purple-100"
          textColor="text-purple-700"
        />
        <InfoCard
          icon={<FaUsers />}
          title="The Team"
          description="We assembled a team of professional weirdos who share our passion for finding the most unusual yet practical products."
          bgColor="bg-yellow-100"
          textColor="text-yellow-700"
        />
        <InfoCard
          icon={<FaHeart />}
          title="The Community"
          description="Today, we're a global community of weird-product enthusiasts, united by our love for the unconventional."
          bgColor="bg-blue-100"
          textColor="text-blue-700"
        />
      </div>
    </div>
  );
};
export default OutStory;

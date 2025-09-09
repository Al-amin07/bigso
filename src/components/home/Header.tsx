import { FaSearch } from "react-icons/fa";
import joker from "@/assets/joker.png";
import homeVideo from "@/assets/videos/home.mp4";
import { VideoBackground } from "../shared/VideoBackground";
const HeaderHero = () => {
  return (
    <div>
      <VideoBackground videoSrc={homeVideo}>
        <div>
          <div className="flex items-center justify-center gap-3 mb-4 z-10">
            <div className=" bg-[#FECB00] rounded-full flex items-center justify-center">
              <img
                src={joker}
                alt="Joker Image"
                className="w-[54px] h-[58px]"
              />
            </div>
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold">
              Welcome to Bagi Land!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-comic text-center md:text-[64px] font-bold mb-5 z-10">
            <span className="text-[#E5025C]">Enter the</span>{" "}
            <span className="text-white">Wonderland</span>{" "}
            <span className="text-[#E5025C]">World!</span>
          </h1>

          {/* Description */}
          <p
            // style={{ fontFamily: '"Comic Neue", cursive' }}
            className="text-lg  md:text-2xl text-center text-black font-comic mb-8 max-w-4xl mx-auto z-10"
          >
            Discover the most bizarre, hilarious, and A nice-to-have that adds
            real impact products that somehow exist on Amazon. Your journey into
            madness starts here!
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-6 z-10">
            <button className="bg-[#9B4DCA] text-xl text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              🎭 Start Madness
            </button>
            <button className="bg-[#FFFF00] text-xl text-[#9B4DCA] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition flex items-center gap-2">
              <FaSearch /> Browse Weird Stuff
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 justify-center z-10">
            <div className="text-center">
              <span className="font-bold text-[#9B4DCA] text-lg">1000+</span>
              <p className=" mt-1.5">Weird Items</p>
            </div>
            <div className="text-center">
              <span className="font-bold text-[#9B4DCA] text-lg">50K+</span>
              <p className=" mt-1.5">Happy Customer</p>
            </div>
            <div className="text-center">
              <span className="font-bold text-[#9B4DCA] text-lg">😆</span>
              <p className=" mt-1.5">Laughs Guaranteed</p>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );
};

export default HeaderHero;

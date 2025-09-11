import WeirdFinds from "@/components/home/WeirdFind";

import HeaderHero from "@/components/home/Header";
import NewsLetter from "@/components/home/NewsLetter";
import EditorsWeirdPicks from "@/components/home/EditorWierdPick";
import TaleofBagiland from "./about/TaleofBagiland";
import WrapperBackground from "@/components/WrapperBackground";

const Home = () => {
  return (
    <div>
      <HeaderHero />
      <div className="space-y-[100px] my-20">
        <WrapperBackground>
          <WeirdFinds />
        </WrapperBackground>
        <WrapperBackground>
          <EditorsWeirdPicks />
        </WrapperBackground>
        <WrapperBackground>
          <div>
            <h1 className="text-[var(--color-brand)] mb-3 text-center text-3xl font-bold">
              {" "}
              Our Story
            </h1>
            <TaleofBagiland />
          </div>
        </WrapperBackground>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Home;

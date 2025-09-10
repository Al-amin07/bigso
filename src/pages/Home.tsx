import WeirdFinds from "@/components/home/WeirdFind";
import CommonWrapper from "../common/CommonWrapper";

import HeaderHero from "@/components/home/Header";
import NewsLetter from "@/components/home/NewsLetter";
import EditorsWeirdPicks from "@/components/home/EditorWierdPick";
import TaleofBagiland from "./about/TaleofBagiland";

const Home = () => {
  return (
    <div>
      <HeaderHero />
      <CommonWrapper className="space-y-[100px] mt-[100px] px-5 md:px-3 lg:px-0 mb-[100px]">
        <WeirdFinds />
        <EditorsWeirdPicks />
        <div>
          <h1 className="text-[var(--color-brand)] mb-3 text-center text-3xl font-bold">
            {" "}
            Our Story
          </h1>
          <TaleofBagiland />
        </div>
      </CommonWrapper>
      <NewsLetter />
    </div>
  );
};

export default Home;

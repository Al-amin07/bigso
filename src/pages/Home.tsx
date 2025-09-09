import WeirdFinds from "@/components/home/WeirdFind";
import CommonWrapper from "../common/CommonWrapper";

import HeaderHero from "@/components/home/Header";
import NewsLetter from "@/components/home/NewsLetter";
import EditorsWeirdPicks from "@/components/home/EditorWierdPick";

const Home = () => {
  return (
    <div>
      <HeaderHero />
      <CommonWrapper>
        <WeirdFinds />
        <EditorsWeirdPicks />
      </CommonWrapper>
      <NewsLetter />
    </div>
  );
};

export default Home;

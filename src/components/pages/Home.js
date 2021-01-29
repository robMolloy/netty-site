import HomeWelcomeSection from "../custom/home/HomeWelcomeSection";
import HomeCanIHelpYou from "../custom/home/HomeCanIHelpYou";
import HomeUnlockingInsights from "../custom/home/HomeUnlockingInsights";
import HomeCoachSelect from "../custom/home/HomeCoachSelect";
import HomeCoachingStyle from "../custom/home/HomeCoachingStyle";
import HomeWhyMe from "../custom/home/HomeWhyMe";
import HomePracticalities from "../custom/home/HomePracticalities";
// import HomeLatestProjectsSection from "../custom/home/HomeLatestProjectsSection";

const Home = () => {
  return (
    <>
      <HomeWelcomeSection />
      <HomeUnlockingInsights />
      <HomeCoachingStyle color="mono" />
      <HomeWhyMe color="mono" />
      <HomeCanIHelpYou color="mono" />
      <HomePracticalities />

      <HomeCoachSelect color="mono" />
    </>
  );
};

export default Home;

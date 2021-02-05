import HomeWelcomeSection from "../custom/home/HomeWelcomeSection";
import HomeCanIHelpYou from "../custom/home/HomeCanIHelpYou";
import HomeUnlockingInsights from "../custom/home/HomeUnlockingInsights";
import HomeCoachSelect from "../custom/home/HomeCoachSelect";
import HomeCoachingStyle from "../custom/home/HomeCoachingStyle";
import HomeQualifications from "../custom/home/HomeQualifications";
import HomePracticalities from "../custom/home/HomePracticalities";
import HomeExperience from "../custom/home/HomeExperience";
import HomeTestimonials from "../custom/home/HomeTestimonials";
import HomeWhatIsCoaching from "../custom/home/HomeWhatIsCoaching";

const Home = () => {
  return (
    <>
      <HomeWelcomeSection />
      <HomeUnlockingInsights />
      <HomeCoachingStyle color="mono" />
      <HomeCanIHelpYou color="mono" />
      <HomeExperience color="mono" />
      <HomeQualifications color="mono" />
      <HomePracticalities />

      <HomeTestimonials />

      <HomeWhatIsCoaching />
      <HomeCoachSelect color="mono" />
    </>
  );
};

export default Home;

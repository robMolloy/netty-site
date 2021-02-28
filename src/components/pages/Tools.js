import React from "react";
import HomeWhatIsCoaching from "../custom/home/HomeWhatIsCoaching";
import HomeCoachSelect from "../custom/home/HomeCoachSelect";
import Print from "../custom/Tools/PrintSection";
import DiscSection from "../custom/Tools/DiscSection";

const Tools = () => {
  return (
    <>
      <HomeWhatIsCoaching />
      <HomeCoachSelect color="mono" />
      <Print />
      <DiscSection />
    </>
  );
};

export default Tools;

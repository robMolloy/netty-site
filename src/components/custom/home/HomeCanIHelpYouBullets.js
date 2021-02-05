import React from "react";
import Text from "../../generic/text/Text";

const HomeCanIHelpYouBullets = (props) => {
  let gutterBottom, before, align, fontWeight, fontColor;
  ({
    gutterBottom = 0.25,
    before = ">",
    align = "left",
    fontWeight = "bold",
    fontColor = "#ffffff",
  } = props);

  const bulletProps = { gutterBottom, before, align, fontWeight, fontColor };
  return (
    <>
      <Text {...bulletProps}>leading your team more effectively</Text>
      <Text {...bulletProps}>managing specific issues within your team</Text>
      <Text {...bulletProps}>developing your team to be more effective</Text>
      <Text {...bulletProps}>
        managing home/remote workers more effectively
      </Text>
      <Text {...bulletProps}>
        holding difficult conversations/managing conflict
      </Text>
      <Text {...bulletProps}>managing your toxic boss</Text>
      <Text {...bulletProps}>building trust</Text>
      <Text {...bulletProps}>developing confidence</Text>
      <Text {...bulletProps}>becoming more assertive</Text>
      <Text {...bulletProps}>building resilience</Text>
      <Text {...bulletProps}>overcoming ‘imposter syndrome’</Text>
      <Text {...bulletProps}>explore feedback in a safe environment</Text>
      <Text {...bulletProps}>
        developing specific skills such as time management, decision making,
        interview skills, presentation skills
      </Text>
      <Text {...bulletProps}>
        identifying Best Self and Shadow Behaviours (see PRINT® section)
      </Text>
      <Text {...bulletProps}>changing/developing your career</Text>
    </>
  );
};

export default HomeCanIHelpYouBullets;

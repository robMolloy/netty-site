import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
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
      <Text {...bulletProps}>How can I lead my team more effectively?</Text>
      <Text {...bulletProps}>
        How can I manage home/remote workers more effectively?
      </Text>
      <Text {...bulletProps}>
        How can I manage specific issues within my team?
      </Text>
      <Text {...bulletProps}>How can I have difficult conversations?</Text>
      <Text {...bulletProps}>How can I manage my toxic boss?</Text>
      <Text {...bulletProps}>
        How can I develop my team to be more effective?
      </Text>
      <Text {...bulletProps}>How can I build trust?</Text>
      <Text {...bulletProps}>How can I develop my confidence?</Text>
      <Text {...bulletProps}>How can I become more assertive?</Text>
      <Text {...bulletProps}>How can I build my resilience?</Text>
      <Text {...bulletProps}>How can I overcome ‘imposter syndrome’?</Text>
      <Text {...{ ...bulletProps, gutterBottom: 0 }}>
        How can I develop specific skills such as time management, decision
        making?
      </Text>
    </>
  );
};

export default HomeCanIHelpYouBullets;

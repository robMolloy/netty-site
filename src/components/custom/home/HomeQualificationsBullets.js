import React from "react";
import Text from "../../generic/text/Text";

const HomeQualificationsBullets = (props) => {
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
      <Text {...bulletProps}>
        Post-graduate level certificate in Performance Development Coaching
      </Text>
      <Text {...bulletProps}> MSc in Management</Text>
      <Text {...bulletProps}> PRINT® and DiSC accredited</Text>
      <Text {...bulletProps}>
        Trained NLP practitioner, I use NLP techniques in coaching where
        appropriate
      </Text>
      <Text {...{ ...bulletProps /* , gutterBottom: 0 */ }}>
        Member of the Association for Coaching, Coaching York and Associate
        Member of the CIPD.
      </Text>
    </>
  );
};

export default HomeQualificationsBullets;

import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

const HomeCoachSelect = (props = {}) => {
  return (
    <Section {...props}>
      <Title align="center">How to select a coach</Title>
      <Text gutterBottom={0}>
        For coaching to be successful it’s important to have the right chemistry
        between you and your coach. During our first no obligation conversation
        about your situation and how we might work together, if we don’t think
        the chemistry is there, I can suggest someone from my network who maybe
        more suitable to work with you.
      </Text>

      <Text>Contact me here to arrange a chemistry session</Text>
    </Section>
  );
};

export default HomeCoachSelect;

import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

const HomeCoachSelect = (props = {}) => {
  return (
    <Section {...props}>
      <Title>Select A Coach</Title>
      <Text gutterBottom={0}>
        For coaching to be successful its important to have the right chemistry
        between you and your coach. After our first no cost conversation about
        your goals and how we can work together to achieve them, if we don’t
        think the chemistry is there, I can suggest someone from my network who
        maybe more suitable to work with you.
      </Text>
    </Section>
  );
};

export default HomeCoachSelect;

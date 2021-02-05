import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

const HomeWhatIsCoaching = (props) => {
  return (
    <Section {...props}>
      <Title align="center">What is coaching</Title>
      <Text>
        Coaching literally means to transport you from one place to another,
        part of your journey moving forward and creating change and is founded
        on a position of trust. It’s simply a conversation that, done well, can
        bring about personal insight and sustained behaviour change. It’s a
        bespoke, time effective way to develop.
      </Text>

      <Text>
        I’d love to be part of your journey, contact me here to talk about how I
        can help
      </Text>
    </Section>
  );
};

export default HomeWhatIsCoaching;

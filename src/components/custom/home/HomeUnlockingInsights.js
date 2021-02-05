import React from "react";
import Section from "../../generic/sections/Section";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const HomeUnlockingInsights = () => {
  return (
    <Section>
      <GridColumnToRow
        alignItems="center"
        array={[
          <>
            <img
              alt=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"
            />
          </>,
          <>
            <Title>Unlocking powerful insights</Title>
            <Text>
              Do you need help to achieve your potential? Do you have challenges
              you’d like to overcome?
            </Text>
            <Text>
              Working together in a safe and trusting environment, my aim is to
              enable you to build a new awareness of yourself to give you the
              best possible chance of achieving your potential. I will help you
              to understand your patterns of behaviour and thinking, to see
              things from a new perspective, to enable you to step out of your
              comfort zone, move forward and create change.
            </Text>
            <Text>
              Contact me here to take your first step to creating change
            </Text>
          </>,
        ]}
      />
    </Section>
  );
};

export default HomeUnlockingInsights;

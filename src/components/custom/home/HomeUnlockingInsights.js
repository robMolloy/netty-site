import React from "react";
import Section from "../../generic/sections/Section";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import ButtonRow from "../../generic/grids/ButtonRow";
import GetInTouchButton from "../buttons/GetInTouchButton";

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
              Are you achieving your potential or is something holding you back?
              My goal is to help you to identify what might be holding you back,
              and to work with you to overcome it, to enable you to reach your
              potential.
            </Text>
            <Text>
              With over 2 decades of experience in people and leadership
              development, I believe that the most powerful way to achieve your
              potential is through tailored coaching. I adapt my coaching style
              to meet your unique needs.
            </Text>
            <Text>Click here to talk to me about achieving your potential</Text>
            <ButtonRow array={[<GetInTouchButton />]} />
          </>,
        ]}
      />
    </Section>
  );
};

export default HomeUnlockingInsights;

import React from "react";
import Section from "../../generic/sections/Section";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import ButtonRow from "../../generic/grids/ButtonRow";
import GetInTouchButton from "../buttons/GetInTouchButton";

const HomeCoachingStyle = (props = {}) => {
  return (
    <Section>
      <GridColumnToRow
        alignItems="center"
        array={[
          <>
            <Title>My style of coaching</Title>
            <Text>
              tailor my approach to you by taking into account your specific
              circumstances, and business environment where appropriate. My
              style is non-directive as this is most helpful in bringing about
              sustained change. At the core of my coaching is my belief that you
              have the resources you need; I will help you to find them. Where
              appropriate, I’ll suggest tools to help you to overcome your
              challenges. This approach will benefit you, your team and the
              business as a whole.
            </Text>
            <Text>
              Click here to talk to me about taking the first step out of your
              comfort zone and getting serious about change
            </Text>
            <Text>Contact me here to talk my style of coaching </Text>
          </>,
          <>
            <img
              alt=""
              src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg"
            />
          </>,
        ]}
      />
    </Section>
  );
};

export default HomeCoachingStyle;

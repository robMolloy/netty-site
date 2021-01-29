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
              My style is non-directive coaching as this is most effective in
              bringing about behaviour change. This approach, combined with
              sharing best practice tools and techniques that I have developed
              during 2 decades of working in leadership development, results in
              maximum growth and change. It’s a powerful way for you to develop
              in a bespoke and tailored way.
            </Text>
            <Text>
              I tailor my approach to you as an individual within the specific
              needs of your business environment. Coaching is a bespoke, time
              effective way to develop as a leader. I will help you to
              understand the areas you need to develop and provide you with the
              best tools to achieve your leadership potential. This will benefit
              you, your team and the business as a whole.
            </Text>
            <Text>
              Click here to talk to me about taking the first step out of your
              comfort zone and getting serious about change
            </Text>
            <ButtonRow array={[<GetInTouchButton />]} />
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

import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";

const HomePracticalities = (props) => {
  return (
    <Section {...props}>
      <GridColumnToRow
        alignItems="center"
        array={[
          <>
            <Title>Practicalities</Title>

            <Text>
              During our initial meeting, we’ll agree the best way to work
              together taking into account your goals, work schedule, learning
              and communication preferences.
            </Text>
            <Text>
              Although I believe the best way to coach is face to face, this can
              be in person, or via Zoom. Walking coaching is very powerful,
              being out in nature helps us to free our mind from the usual
              constraints; it’s all about what works best for you.
            </Text>
            <Text>
              Coaching is usually time limited and focused on achieving specific
              goals and outcomes. This normally takes 4-6 sessions depending on
              the complexity of the outcomes you want to achieve. We can amend
              this as the sessions develop, if you achieve your outcomes in the
              first session, that’s great!
            </Text>
            <Text>
              Coaching is a powerful development tool that we can all benefit
              from; I want to ensure my coaching is accessible to everyone and
              charge a lower rate if you are self-funding or work for a charity.
            </Text>
            <Text>Contact me for a no obligation discussion</Text>
          </>,
          <img alt="" src="./myFlowers.jpg" />,
        ]}
      />
    </Section>
  );
};

export default HomePracticalities;

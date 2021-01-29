import React from "react";
import Section from "../../generic/sections/Section";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import ButtonRow from "../../generic/grids/ButtonRow";
import GetInTouchButton from "../buttons/GetInTouchButton";
import Container from "../../generic/containers/Container";

const HomeWhyMe = (props = {}) => {
  return (
    <>
      <Section>
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <img
                alt=""
                src="https://images.pexels.com/photos/4168034/pexels-photo-4168034.jpeg"
              />
            </>,
            <>
              <Title>Why Me?</Title>

              <Text>
                Qualifications and professional membership – post-graduate level
                certificate in Performance Development Coaching and MSc in
                Management; PRINT and DiSC accredited. As a trained NLP
                practitioner, I use NLP techniques in coaching where
                appropriate. Member of the Association for Coaching, Coaching
                York and Associate Member of the CIPD.
              </Text>
            </>,
          ]}
        />
      </Section>
      <Section>
        <Text>
          Experience - With over 20 years of people, organisational and
          management development experience, I bring a wide range of tools and
          techniques to support you in your behaviour change and development.
          I’ve coached people in various types and size of organisation, in the
          public and private sector, and at all levels up to Managing Director.
          I’ve recruited and managed two training teams, and reporting at
          Director level, been part of a senior management team of a FTSE 100
          company. I brings this experience to my coaching. I’ve witnessed the
          powerful difference that my coaching has made to individuals and their
          businesses
        </Text>

        <Text align="center">
          Click here to talk to me about achieving your potential
        </Text>
        <ButtonRow array={[<GetInTouchButton />]} />
      </Section>
    </>
  );
};

export default HomeWhyMe;
/*


Why me?



*/

import React from "react";
import Section from "../../generic/sections/Section";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import ButtonRow from "../../generic/grids/ButtonRow";
import GetInTouchButton from "../buttons/GetInTouchButton";

const HomeExperience = () => {
  return (
    <>
      <Section>
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <Title>My Experience</Title>

              <Text>
                With over 2 decades of people, organisational and management
                development experience, I use a wide range of tools and
                techniques to support you in your behaviour change and
                development. I’ve coached people in various types and size of
                organisation, in the public and private sector, and at all
                levels up to Managing Director. I’ve recruited and managed two
                training teams, and reporting at Director level, been part of a
                senior management team of a FTSE 100 company. I brings this
                experience to my coaching and tailor my approach to your unique
                needs. I’ve witnessed the powerful difference that my coaching
                has made to individuals and their businesses (see testimonials).
                I strive to be the best coach I can be through personal
                development, self-reflection and supervision.
              </Text>
            </>,

            <>
              <img
                alt=""
                src="https://images.pexels.com/photos/4168034/pexels-photo-4168034.jpeg"
              />
            </>,
          ]}
        />
        <Text align="center">
          Click here to talk to me about achieving your potential
        </Text>
      </Section>
    </>
  );
};

export default HomeExperience;

import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import { useTheme } from "@material-ui/core";
import Container from "../../generic/containers/Container";

const HomeTestimonials = (props) => {
  const theme = useTheme();

  const containerStyle = {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
  };
  const textProps = { style: { color: "#FFFFFF" }, fontWeight: "bold" };
  //

  return (
    <Section {...props} withContainer={false}>
      <Container style={containerStyle}>
        <Title {...textProps} align="center">
          Testimonials
        </Title>
        <GridColumnToRow
          // alignItems="center"
          array={[
            <>
              <Title {...textProps} align="center">
                Robert
              </Title>
              <Text {...textProps}>
                Janette's coaching had a profound effect on me both personally
                and professionally, Over the course of our sessions, Janette not
                only gave great and practical advice, she listened and provided
                a superb mirror for the areas I needed to take responsibility
                for.
              </Text>
              <Text {...textProps}>
                The impact of this was not only an improvement in my performance
                as a leader, but also it was a huge boost to our entire
                organisation. I would recommend Janette to anyone wanting to
                make a positive change in their life.
              </Text>
            </>,
            <>
              <Title {...textProps} align="center">
                Hannah
              </Title>
              <Text {...textProps}>
                I was lucky enough to have personal coaching with Janette.
                Janette was not only a great coach professionally but personally
                helped me with tough decisions. The discussions we had during
                coaching helped me develop alternate ways of thinking and
                leading our relatively new team into our most profitable year in
                a decade.
              </Text>
              <Text {...textProps}>
                The time given to coaching enabled me to take a step back,
                invest time in myself, and in turn, gave the team a boost in
                their own leadership capabilities. Coaching with Janette was
                most definitely my best professional investment.
              </Text>
            </>,
          ]}
        />
      </Container>
    </Section>
  );
};

export default HomeTestimonials;

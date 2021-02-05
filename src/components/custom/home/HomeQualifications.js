import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import Container from "../../generic/containers/Container";
import HomeQualificationsBullets from "./HomeQualificationsBullets";
import { makeStyles, useTheme } from "@material-ui/core";

// const useStyles = main;

const HomeQualifications = (props = {}) => {
  const theme = useTheme();
  const containerStyle = {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
  };
  const classes = makeStyles((theme) => ({
    root: {},
    bulletContainer: containerStyle,
  }))();
  return (
    <>
      <Section withContainer={false}>
        <Container style={containerStyle}>
          <Title fontColor="#ffffff" fontWeight="bold" align="center">
            Qualifications and professional membership
          </Title>
          <HomeQualificationsBullets />
          <Text
            align="center"
            fontColor="#ffffff"
            fontWeight="bold"
            gutterBottom={0}
          >
            Click here to talk to me about achieving your potential
          </Text>
        </Container>
      </Section>
    </>
  );
};

export default HomeQualifications;

import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";

import makeStyles from "@material-ui/styles/makeStyles";

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);

  const classes = makeStyles((theme) => ({
    root: {
      position: "relative",
      background: "url(img/redwood.png) center",
    },
    column: {
      height: "100%",
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    message: {},
    container: {
      height: `${window.innerHeight - 120}px`,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      padding: "0",
    },
    // iconsContainer: { position: "absolute", bottom: 0 },
    icon: {
      fontSize: "3em",
      cursor: "pointer",
      color: theme.palette[color].contrastText,
      "&:hover": { fontSize: "3.3em" },
    },
    waves: { position: "absolute", bottom: 0, left: 0 },
  }))();

  return (
    <Section className={classes.root} color={color} withContainer={false}>
      <span className={classes.container}>
        <span className={classes.column}>
          <span></span>
          <span className={classes.message}>
            <Title
              align="center"
              fontColor="#ffffff"
              fontWeight="bold"
              style={{ fontSize: "4.5em", lineHeight: "70px" }}
              gutterBottom={10}
            >
              Coaching People
            </Title>
            <Title
              align="center"
              fontColor="#ffffff"
              fontWeight="bold"
              style={{ fontSize: "2.5em", lineHeight: "45px" }}
            >
              Reaching Your Potential
            </Title>
          </span>
          <span></span>
          <span></span>
        </span>
      </span>
      <img src="wave.png" alt="" className={classes.waves} />
    </Section>
  );
};

export default HomeWelcomeSection;

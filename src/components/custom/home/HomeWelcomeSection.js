import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

import makeStyles from "@material-ui/styles/makeStyles";

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);

  const classes = makeStyles((theme) => ({
    root: { position: "relative" },
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
            <Text align="center">Welcome to</Text>
            <Title size={0}>Nettty's new website</Title>
            {/* <Text>romolo.co.uk</Text> */}
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

import React from "react";
import Section from "../../generic/sections/Section";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import HomeCanIHelpYouBullets from "./HomeCanIHelpYouBullets";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {},
  bulletContainer: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
  },
}));

const HomeCanIHelpYou = (props = {}) => {
  // let color;
  // ({ color } = props);
  const classes = useStyles();
  return (
    <Section {...props}>
      <GridColumnToRow
        alignItems="center"
        array={[
          <div className={classes.bulletContainer}>
            <HomeCanIHelpYouBullets />
          </div>,
          <>
            <Title>What can I help you with?</Title>
            <Text>
              Although people generally come for coaching in specific areas,
              this might change after the first few sessions as we work together
              to understand what might be blocking you from moving forward. Some
              questions I can help you with:
            </Text>
            <Text>
              My goal is to help you to identify what’s holding you back and how
              to overcome it. Click here to talk to me about your goal
            </Text>
          </>,
        ]}
      />
    </Section>
  );
};

export default HomeCanIHelpYou;

/*


*/

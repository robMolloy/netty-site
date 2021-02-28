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
          <>
            <Title>What I can help you with</Title>
            <Text>
              I’m passionate about helping people to overcome challenges and
              achieve their potential. Nothing is too trivial or too difficult
              to have a conversation about. Questions and challenges I can help
              you with include:
            </Text>
            <Text>Contact to me here to talk about your challenges.</Text>
          </>,
          <div className={classes.bulletContainer}>
            <HomeCanIHelpYouBullets />
          </div>,
        ]}
      />
    </Section>
  );
};

export default HomeCanIHelpYou;

/*


*/

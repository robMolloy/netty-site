import React from "react";

import { makeStyles } from "@material-ui/styles";

import Title from "../../generic/text/Title";

// const headerHeight

const HeaderBarContents = (props = {}) => {
  let color;
  ({ color = "mono", ...props } = props);

  const classes = makeStyles((theme) => ({
    logoContainer: {
      alignSelf: "center",
      maxHeight: "100px",
      height: "100%",
      maxWidth: "65%",
      color: theme.palette[color].contrastText,
    },
    logoSettingsContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      padding: `${theme.spacing(1)}px 0`,
    },
  }))();

  return (
    <>
      <div className={classes.logoContainer}>
        <Title color="mono" gutterBottom={0}>
          Janette Poole
        </Title>
      </div>

      <div className={classes.spacer}></div>

      <span className={classes.logoSettingsContainer}></span>
    </>
  );
};

export default HeaderBarContents;

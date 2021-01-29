import React from "react";

import MUIBox from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../containers/Container";

const Section = (props = {}) => {
  let children, className, withContainer, color, spacingX, spacingY;
  ({
    children,
    className = "",
    withContainer = true,
    color = "mono",
    spacingX = 0,
    spacingY = 4,
    ...props
  } = props);

  const Component = withContainer ? Container : React.Fragment;

  const classes = makeStyles((theme) => ({
    root: {
      padding: `${theme.spacing(spacingY)}px ${theme.spacing(spacingX)}px`,
      color: theme.palette?.[color]?.contrastText ?? "#000000",
      backgroundColor: theme.palette?.[color]?.main ?? "#FFFFFF",
    },
  }))();

  return (
    <MUIBox className={`${classes.root} ${className}`} color={color} {...props}>
      <Component>{children}</Component>
    </MUIBox>
  );
};

export default Section;

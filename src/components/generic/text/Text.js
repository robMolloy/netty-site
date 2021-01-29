import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Text = (props = {}) => {
  let children,
    before,
    className,
    align,
    xsOverride,
    gutterBottom,
    Component,
    underline,
    fontWeight,
    color,
    fontColor;

  ({
    children,
    before = "",
    className = "",
    align = "justify",
    xsOverride = [],
    gutterBottom = 2,
    Component = "p",
    underline = false,
    fontWeight = "normal",
    color = "mono",
    fontColor = "",
    ...props
  } = props);

  const classes = makeStyles((theme) => ({
    root: {
      textAlign: align,
      borderBottom: underline ? `1px solid ${theme.palette.grey.main}` : "none",
      margin: 0,
      marginBottom: theme.spacing(gutterBottom),
      lineHeight: "32px",
      fontWeight: fontWeight,
      color: !!fontColor ? fontColor : theme.palette[color].contrastText,
    },
  }))();

  const xsClasses = xsOverride.map((opt) => `xs-style-${opt}`).join(" ");

  return (
    <Component
      className={`${className} ${classes.root} ${xsClasses}`}
      {...props}
    >
      {before}
      {!!before && " "}
      {children}
    </Component>
  );
};

export default Text;

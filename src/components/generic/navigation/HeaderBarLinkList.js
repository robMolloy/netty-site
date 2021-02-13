import React from "react";
import Link from "./HeaderBarLink";
import { makeStyles } from "@material-ui/core";
import config from "../../../config";

const HeaderBarLinkList = () => {
  const classes = makeStyles((theme) => ({
    list: { display: "flex", alignItems: "center" },
  }))();

  return (
    <span className={classes.list}>
      {config.pages.map((pagesData, j) => {
        let usePage = true;

        if (!usePage) return "";

        return (
          <Link key={j} to={pagesData.path}>
            {pagesData.name}
          </Link>
        );
      })}
    </span>
  );
};

export default HeaderBarLinkList;

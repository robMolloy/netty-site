import React from "react";

import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import AppBar from "@material-ui/core/AppBar";
import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Container from "../../generic/containers/Container";
import { Hidden } from "@material-ui/core";
import HeaderBarLinkList from "./HeaderBarLinkList";
//

const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    textAlign: "left",
    backgroundColor: theme.palette.mono.main,
    position: "relative",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  menuButton: {
    alignSelf: "center",
    border: `solid 2px ${theme.palette.grey.main}`,
    borderRadius: "4px",
    padding: "4px 8px",
  },
  links: { display: "flex", alignItems: "center" },
  link: {
    marginRight: theme.spacing(3),
    textDecoration: "none",
    color: "black",
    padding: `${theme.spacing(1)}px 0`,
    borderBottom: "1px solid #00000000",
    cursor: "pointer",
    "&:hover": { borderBottom: "1px solid black" },
  },
}));

const HeaderBar = (props = {}) => {
  let children, toggleDrawer, menuButton;
  ({ children, toggleDrawer, menuButton = true, ...props } = props);

  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <MUIToolbar className={classes.toolbar} variant="dense">
        <Container className={classes.container}>
          {children}

          <Hidden smDown>
            <HeaderBarLinkList />
            {/* <div className={classes.links}>
              <Link to className={classes.link}> Home</Link>
              <Link className={classes.link}> Psychometic</Link>
              <Link className={classes.link}> Resources</Link>
              <Link className={classes.link}> Contact</Link>
            </div> */}
          </Hidden>

          {menuButton && (
            <Hidden mdUp>
              <IconButton
                onClick={toggleDrawer}
                className={classes.menuButton}
                aria-label="menu"
                color="primary"
                variant="outlined"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          )}
        </Container>
      </MUIToolbar>
    </AppBar>

    // </div>
  );
};

export default HeaderBar;

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Outlet, useNavigate } from "react-router-dom";
import "@src/scss/Layout.scss";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useDispatch } from "react-redux";
import globalSlice from "@src/store/global";

const useStyles = makeStyles({
  list: {
    width: 180,
  },
  fullList: {
    width: "auto",
  },
  root: {
    width: 1200,
    background: "#3f51b5",
  },
  action: {
    color: "#fff !important",
  },
  "action.active": {
    color: "#fff !important",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function Layout() {
  const { mobileFalse, mobileTure } = globalSlice.actions;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  window.innerHeight < 640 ? dispatch(mobileTure()) : dispatch(mobileFalse());

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    // 监听
    window.addEventListener("resize", () =>
      window.innerHeight < 640
        ? dispatch(mobileTure())
        : dispatch(mobileFalse()),
    );
    // 销毁
    return () => window.removeEventListener("resize", () => {});
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const navLinkData = [
    {
      path: "/",
      name: "首页",
    },
    {
      path: "/about",
      name: "霸王的大陆",
    },
  ];

  const navigate = useNavigate();

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinkData.map((item) => (
          <div key={item.name}>
            <ListItem button onClick={() => navigate(item.path)}>
              <ListItemText primary={item.name} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div className="main">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer("left", true)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">三国</Typography>
        </Toolbar>
      </AppBar>
      {/* 类似vue的router-view组件 */}
      <Outlet />
      <div className="footer">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            window.open("https://github.com/reoreo-zyt", "_blank"); // 在新标签页中打开网址
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="q群：282419916"
            icon={<PhoneIcon />}
            className={classes.action}
          />
          <BottomNavigationAction
            label="项目github开源"
            icon={<GitHubIcon />}
            className={classes.action}
          />
          <button>
            <a href="https://github.com/reoreo-zyt"></a>
          </button>
        </BottomNavigation>
      </div>
      {/* 侧边栏 */}
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}

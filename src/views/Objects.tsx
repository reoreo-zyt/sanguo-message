import React from "react";
import MTitle from "@components/MTitle";
import MPaper from "@components/MPaper";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Pagination from "@material-ui/lab/Pagination";
import GlobalState from "@src/typings/store";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    objectRoot: {
      display: "flex",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0",
    },
    PaperRight: {
      margin: "10px 0",
    },
  }),
);

export default function Objects() {
  const MTitleList = [{ title: "产品中心", desc: "Product Center" }];
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const isMobile = useSelector((state: GlobalState) => state.isMobile);

  const handleClick = () => {
    setOpen(!open);
  };

  const images = [
    {
      alt: "gjdkbjd",
      src: "/images/gjdkbjd.png",
      text: "高精度可变角度光源系统",
      show: false,
    },
    {
      alt: "htmbq",
      src: "/images/htmbq.png",
      text: "哈特曼波前传感器光机系统",
      show: false,
    },
    {
      alt: "jgjrjz",
      src: "/images/jgjrjz.png",
      text: "激光加热基座光学系统",
      show: false,
    },
    {
      alt: "kbclk",
      src: "/images/kbclk.png",
      text: "可编程轮廓涂版机",
      show: false,
    },
    {
      alt: "lztly",
      src: "/images/lztly.png",
      text: "量子陀螺仪演示系统",
      show: false,
    },
    {
      alt: "syhgq",
      src: "/images/syhgq.png",
      text: "商业化光纤激光发射系统样机",
      show: false,
    },
  ];

  return (
    <div className="about">
      <div className="container">
        <MTitle {...MTitleList[0]}></MTitle>
      </div>
      <div className={classes.objectRoot}>
        {isMobile ? (
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                产品列表
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="所有产品" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {images.map((item, index) => (
                  <ListItem button className={classes.nested} key={index}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        ) : null}
        <div className={classes.PaperRight}>
          <MPaper></MPaper>
        </div>
      </div>
      <Pagination
        className={classes.pagination}
        count={1}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}

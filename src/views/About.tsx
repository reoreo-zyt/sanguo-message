import React from "react";
import MTitle from "@components/MTitle";
import MCard from "@components/MCard";
import "@src/scss/About.scss";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    root: {
      width: "100%",
      maxWidth: "100ch",
      backgroundColor: theme.palette.background.paper,
    },

    inline: {
      display: "inline",
    },
  }),
);

export default function About() {
  const MTitleList = [
    { title: "关于我们", desc: "About Us" },
    { title: "团队介绍", desc: "Team Introduction" },
  ];
  const maxWidth = 1200;
  const MCardList = {
    maxWidth,
    imgUrl: "/images/Card.png",
    imgTitle: "超净间",
    title: "芸辉光电科技有限公司",
    body: [
      {
        text: "深圳市芸辉光电科技有限公司成立于2020年9月，主要为科研院所、高校、军工单位提供定制产品服务。成立到现在一年，合作的客户有河北清华发展研究院、电子科技大学、中科院光电所、洛阳613、北京航空航天大学、山东大学。",
      },
      {
        text: "我们擅长于根据用户单位明确提出定制化产品需求或者是描述性的需求，进行项目分析，提出具体技术指标，设计项目方案、产品设计、交付满足用户单位要求的产品。",
      },
      {
        text: "我们主要优势在于为用户单位提供非标光机系统整体设计、制造、装调，对于电路、软件开发我们有长期合作伙伴，可成套交付产品，亦可配合用户单位协同设计。",
      },
    ],
    isShowButton: false,
  };
  const classes = useStyles();

  return (
    <div className="about">
      <div className="container">
        <MTitle {...MTitleList[0]}></MTitle>
        <div className="card-container">
          <MCard {...MCardList}></MCard>
        </div>
        <MTitle {...MTitleList[1]}></MTitle>
        <div className={classes.list}>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Leo" />
              </ListItemAvatar>
              <ListItemText
                primary="Leo"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      工程总监
                    </Typography>
                    {
                      " — 7年互联网经验，曾服务于搜狐火炬传递、北京建筑设_计研究院、日本电通"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Shiery" />
              </ListItemAvatar>
              <ListItemText
                primary="Shiery"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      公司创始人
                    </Typography>
                    {
                      " — 世界权威电子设计杂志NEWWEBPICK推荐设计师_收录电子杂志（第29期）"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Jone " />
              </ListItemAvatar>
              <ListItemText
                primary="Jone "
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      工程营销总监
                    </Typography>
                    {
                      " — 10年广告行业经验_曾任职多家4A公司，为众多企业提_供战略品牌策划咨询"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Ken" />
              </ListItemAvatar>
              <ListItemText
                primary="Ken"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      工程营销顾问
                    </Typography>
                    {
                      " — 为众多知名企业提供战略品牌策划咨询、品牌传播_创意服务。并对众多城市提供品牌战略服务"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

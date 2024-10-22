import React, { useState } from "react";
import MTitle from "@components/MTitle";
import FontDownload from "@material-ui/icons/FontDownload";
// import TextViewer from "@components/TextViewer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import "@src/scss/Home.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import FileViewer from "react-file-viewer";

export default function Home() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      dialog: {
        zIndex: -999,
      },
      appBar: {
        position: "relative",
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
      content: {
        width: "100%",
      },
      contentBox: {
        height: "100vh",
      },
      media: {
        height: 140,
      },
    }),
  );

  const classes = useStyles();

  const MTitleList = [
    { title: "游戏下载", desc: "三国志霸王的大陆" },
    { title: "三国人物", desc: "从184黄巾起义到280东吴灭亡" },
  ];
  const GameList = [
    {
      pic: "images/blank.png",
      url: "images/J2ME-Loader.apk",
      name: "J2ME",
      version: "v1.7.9",
      author: "游戏为JAVA游戏，请先下载模拟器游玩。",
    },
    {
      pic: "images/blank.png",
      url: "images/bwdl2.0.6-5drama.jar",
      name: "三国志霸王的大陆2.0.6-5剧本",
      version: "v2.0.6",
      author: "晏舟，END",
    },
    {
      pic: "images/blank.png",
      url: "images/sanguo1.6.8.jar",
      name: "三国志霸王的大陆经典版本",
      version: "1.6.8",
      author: "微笑",
    },
    {
      pic: "images/jz.jpg",
      url: "images/bwdl156.jar",
      name: "三国志霸王的大陆",
      version: "v1.5.6",
      author: "橘子",
    },
    {
      pic: "images/END.jpg",
      url: "images/bwdl2.0.5.jar",
      name: "三国志霸王的大陆",
      version: "v2.0.5",
      author: "END",
    },
    {
      pic: "images/END.jpg",
      url: "images/bwdl2.0.6.jar",
      name: "三国志霸王的大陆2.0.6完美版",
      version: "2.0.6",
      author: "END",
    },
    {
      pic: "images/blank.png",
      url: "images/bwdl169-sh.apk",
      name: "三国志霸王的大陆水浒",
      version: "v1.6.9",
      author: "公子羽、一抹斜阳",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-zgc.jar",
      name: "三国志霸王的大陆战国策",
      version: "未知",
      author: "蜀山剑圣",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-yxzz.jar",
      name: "三国志霸王的大陆玉玺战争",
      version: "1.0.7",
      author: "蜀山剑圣",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-mjh.jar",
      name: "三国志霸王的大陆满江红",
      version: "1.0.2",
      author: "蜀山剑圣",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-wm.jar",
      name: "三国志霸王的大陆晚明",
      version: "2.0.0",
      author: "蜀山剑圣",
    },
    {
      pic: "images/yjk.jpg",
      url: "images/bwdl-50.jar",
      name: "三国志霸王的大陆五十君主",
      version: "未知",
      author: "一劍開天門",
    },
    {
      pic: "images/yz.jpg",
      url: "images/bwdl-qxbq3.2.9.jar",
      name: "三国志霸王的大陆群雄并起完美版",
      version: "3.2.9",
      author: "晏舟",
    },
    {
      pic: "images/yz.jpg",
      url: "images/bwdl-jqxc.jar",
      name: "三国志霸王的大陆进取西川",
      version: "未知",
      author: "晏舟",
    },
  ];

  const imageStyle = {
    width: "50%", // 调整图片宽度为视口宽度的50%
    height: "auto", // 高度自动调整以保持图片比例
  };
  const [open, setOpen] = React.useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchQuery(event.target.value);
    handleClickOpen();
  };

  // eslint-disable-next-line prefer-const
  let [key, setKey] = useState(0);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    key = 0;
    setKey(key);
  };

  return (
    <div className="about">
      <div className="container">
        <MTitle title={MTitleList[0].title} desc={MTitleList[0].desc}></MTitle>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {GameList.map((item, index) => (
            <div key={index} className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={item.pic} alt="Brohm Lake"></img>
                    <figcaption>{item.name}</figcaption>
                  </figure>

                  <ul>
                    <li>版本：{item.version}</li>
                    <li>修改作者：{item.author}</li>
                  </ul>
                </div>

                <div className="card-back">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={item.pic} alt="Brohm Lake"></img>
                  </figure>

                  <button>
                    <a href={item.url} style={{ color: "#fff" }}>
                      下载
                    </a>
                  </button>

                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleSearch}
                variant="contained"
                color="primary"
              >
                <FontDownload></FontDownload>
              </Button>
            </div>
          ))}
        </div>
      </div>
      {open ? (
        <Dialog
          style={open ? { zIndex: 1300 } : { zIndex: -999 }}
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                修改文档
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <div className={classes.contentBox}>
              {/* <TextViewer txtFileUrl="images/bwdl2.0.6-5drama.txt" /> */}
              <FileViewer
                style={imageStyle}
                fileType="xlsx" //文件类型
                filePath={"images/bwdl2.0.6-5剧本.xlsx"} //文件地址（后台给返的二进制流也可以）
              />
            </div>
          </div>
        </Dialog>
      ) : null}
    </div>
  );
}

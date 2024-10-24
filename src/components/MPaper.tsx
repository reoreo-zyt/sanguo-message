import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "@src/scss/MPaper.scss";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import "react-photo-view/dist/react-photo-view.css";
import { ReactReader } from "react-reader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        width: "277px",
        height: "277px",
        margin: "8px 20px",
      },
    },
    search: {
      // width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    page: {
      // display: "flex",
      // justifyContent: "center",
      "& > *": {
        // width: "100vw",
        // marginLeft: "30vw",
        maxWidth: "80px",
        // height: "80px",
      },
    },
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    media: {
      height: 140,
    },
  }),
);

export default function MPaper() {
  const [location, setLocation] = useState<string | number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = React.useState(1);
  // eslint-disable-next-line prefer-const
  const classes = useStyles();
  // 使用useState来控制key值，即重新渲染的触发条件
  // eslint-disable-next-line prefer-const
  let [key, setKey] = useState(0);
  // eslint-disable-next-line prefer-const
  let [all_data, setAllData] = useState([]);
  // eslint-disable-next-line prefer-const
  let [images, setImages] = useState([]);
  // eslint-disable-next-line prefer-const
  let [clickIndex, setClickIndex] = useState(0);

  const [open, setOpen] = React.useState(false);
  const tags = [
    {
      name: "全部",
      color: "#95e1d3",
    },
    {
      name: "魏书",
      color: "#eaffd0",
    },
    {
      name: "蜀书",
      color: "#fce38a",
    },
    {
      name: "吴书",
      color: "#a6d0e4",
    },
    {
      name: "后汉书",
      color: "#f9ffea",
    },
    {
      name: "后汉纪",
      color: "#ffecda",
    },
    {
      name: "资质通鉴",
      color: "#d4a5a5",
    },
    {
      name: "华阳国志",
      color: "#ff8264",
    },
    {
      name: "晋书",
      color: "#ff6464",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("images/三国人物信息快速查询表.json");
      const fetchedData = await response.json();
      all_data = fetchedData[2];
      for (let i = 0; i < fetchedData[2].length; i++) {
        if (all_data[i]["来源"].slice(0, 1) == "魏") {
          all_data[i]["书籍分类"] = "魏书";
          all_data[i]["book"] = "/images/sanguo.epub";
        }
        if (all_data[i]["来源"].slice(0, 1) == "蜀") {
          all_data[i]["书籍分类"] = "蜀书";
          all_data[i]["book"] = "/images/sanguo.epub";
        }
        if (all_data[i]["来源"].slice(0, 1) == "吴") {
          all_data[i]["书籍分类"] = "吴书";
          all_data[i]["book"] = "/images/sanguo.epub";
        }
        if (all_data[i]["来源"].slice(0, 1) == "汉") {
          all_data[i]["书籍分类"] = "后汉书";
          all_data[i]["book"] = "/images/houhan.epub";
        }
        if (all_data[i]["来源"].slice(0, 2) == "汉纪") {
          all_data[i]["书籍分类"] = "后汉纪";
          all_data[i]["book"] = "/images/lhj.epub";
        }
        if (all_data[i]["来源"].slice(0, 1) == "资") {
          all_data[i]["书籍分类"] = "资质通鉴";
          all_data[i]["book"] = "/images/zztj.epub";
        }
        if (all_data[i]["来源"].slice(0, 1) == "华") {
          all_data[i]["书籍分类"] = "华阳国志";
          all_data[i]["book"] = "";
        }
        if (all_data[i]["来源"].slice(0, 1) == "晋") {
          all_data[i]["书籍分类"] = "晋书";
          all_data[i]["book"] = "/images/js.epub";
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = all_data.map((item: { [x: string]: string }) => ({
        alt: "blank",
        src: "/images/blank.png",
        text: item["姓"] + item["名"],
        show: false,
        color: tags.find((tag) => tag.name === item["书籍分类"])?.color,
        ...item,
        details: {
          imgs: [],
        },
      }));
      all_data = data;
      setAllData(all_data);
      setImages(data);
      console.log(images, "==images==");
    }
    fetchData();
  }, []); // 空数组[]确保仅在组件挂载时执行一次

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchQuery(event.target.value);
    console.log(searchQuery);
    images = all_data;
    setImages([
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...images.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => (item["姓"] + item["名"]).includes(searchQuery),
      ),
    ]);
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = (event: React.ChangeEvent<object>, index: number) => {
    setOpen(true);
    clickIndex = index;
    setClickIndex(clickIndex);
  };

  const handleClickChange = (
    event: React.ChangeEvent<object>,
    index: number,
  ) => {
    console.log(images, "==images==");
    console.log(all_data, "==all_data==");
    setPage(1);
    if (tags[index]["name"] === "全部") {
      // images = all_data2;
      console.log(images, "==images==");
      console.log(all_data, "==all_data2==");
      setImages(all_data);
    } else {
      images = all_data;
      setImages([
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...images.filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any) => item["书籍分类"] === tags[index]["name"],
        ),
      ]);
    }
  };

  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  const handleClose = () => {
    setOpen(false);
    key = 0;
    setKey(key);
  };

  return (
    <div>
      <form className={classes.search} noValidate autoComplete="off">
        <TextField
          id="outlined-search"
          value={searchQuery}
          onChange={handleInputChange}
          label={"共" + images.length + "人"}
          type="search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <Button
                onClick={handleSearch}
                variant="contained"
                color="primary"
              >
                <SearchIcon></SearchIcon>
              </Button>
            ),
          }}
        />
      </form>
      {tags.map((item, index) => {
        return (
          <p
            key={index}
            className="drinks__tag tag-inactive"
            style={{ backgroundColor: item.color }}
            onMouseDown={(event) => handleClickChange(event, index)}
          >
            {item.name}
          </p>
        );
      })}
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        <div className={classes.page}>
          <Pagination
            color="primary"
            variant="outlined"
            count={Math.ceil(images.length / 8)}
            page={page}
            onChange={handleChange}
          />
        </div>
        <div>
          <div
            className={classes.root}
            style={{ height: "59vh", maxHeight: "59vh", overflowY: "scroll" }}
          >
            {/* 1 (0, 7) 2 (8, 15) 3 (16, 23) 4 (24, 31) 5 (32, 39) 6 (40, 47) 7 (48, 55) 8 (56, 63) */}
            {images.slice((page - 1) * 8, 8 * page).map((item, index) => (
              <Paper
                key={index}
                className="paper"
                elevation={3}
                onMouseDown={(event) => handleClickOpen(event, index)}
              >
                <img className="img" alt={item.alt} src={item.src} />
                {
                  <div>
                    <div
                      className="text"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.text}
                    </div>
                    <div className="desc_text">
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">字：</span>
                        <span className="desc_text_item_title">
                          {item["字"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">籍贯郡：</span>
                        <span className="desc_text_item_title">
                          {item["籍贯郡"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">籍贯县：</span>
                        <span className="desc_text_item_title">
                          {item["籍贯县"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">亲属：</span>
                        <span className="desc_text_item_title">
                          {item["亲属"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">师从：</span>
                        <span className="desc_text_item_title">
                          {item["师从"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">别称：</span>
                        <span className="desc_text_item_title">
                          {item["别称"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">县令/长：</span>
                        <span className="desc_text_item_title">
                          {item["县令/长"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">太守/相：</span>
                        <span className="desc_text_item_title">
                          {item["太守/相"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">
                          刺史/州牧：
                        </span>
                        <span className="desc_text_item_title">
                          {item["刺史/州牧"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">都尉：</span>
                        <span className="desc_text_item_title">
                          {item["都尉"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">校尉：</span>
                        <span className="desc_text_item_title">
                          {item["校尉"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">中郎将：</span>
                        <span className="desc_text_item_title">
                          {item["中郎将"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">将军：</span>
                        <span className="desc_text_item_title">
                          {item["将军"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">九卿：</span>
                        <span className="desc_text_item_title">
                          {item["九卿"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">三公：</span>
                        <span className="desc_text_item_title">
                          {item["三公"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">
                          侍中/尚书：
                        </span>
                        <span className="desc_text_item_title">
                          {item["侍中/尚书"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">爵位：</span>
                        <span className="desc_text_item_title">
                          {item["爵位"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">谥号：</span>
                        <span className="desc_text_item_title">
                          {item["谥号"]}
                        </span>
                      </div>
                      <div className="desc_text_item">
                        <span className="desc_text_item_title">来源：</span>
                        <span className="desc_text_item_title">
                          {item["来源"]}
                        </span>
                      </div>
                    </div>
                  </div>
                }
              </Paper>
            ))}
          </div>
        </div>
      </div>
      {open ? (
        <Dialog
          style={open ? { zIndex: 1300 } : { zIndex: -999 }}
          fullScreen
          open={open}
          onClose={handleClose}
          // TransitionComponent={Transition}
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
                {images[clickIndex].text + " - " + images[clickIndex]["来源"]}
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ height: "100vh" }}>
            <ReactReader
              url={images[clickIndex].book}
              // url="/images/sanguo.epub"
              location={location}
              locationChanged={(epubcfi: string) => setLocation(epubcfi)}
            />
          </div>
        </Dialog>
      ) : null}
    </div>
  );
}

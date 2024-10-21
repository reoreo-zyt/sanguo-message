import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "@src/scss/MCard.scss";
import Slide from "./Slide";

MCard.propTypes = () => ({
  maxWidth: {
    type: "number",
    defaultValue: 1200,
  },
  imgUrl: {
    type: "string",
    defaultValue: "",
  },
  imgTitle: {
    type: "string",
    defaultValue: "",
  },
  title: {
    type: "string",
    defaultValue: "",
  },
  body: {
    type: "Array",
    defaultValue: [],
  },
  isShowButton: {
    type: "boolean",
    defaultValue: true,
  },
  isCardMedia: {
    type: "boolean",
    defaultValue: false,
  },
});

type MCardBodyType = {
  text: string;
};

export default function MCard({
  maxWidth = 1200 as number,
  imgUrl = "" as string,
  imgTitle = "" as string,
  title = "" as string,
  body = [] as Array<MCardBodyType>,
  isShowButton = true as boolean,
  isCardMedia = false as boolean,
}) {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    root: {
      maxWidth,
    },
  });
  const classes = useStyles();
  const handleNavigateTo = () => {
    navigate("/about");
    // 通知 tab 组件切换
  };
  const images = [
    "/images/Card1-1.jpg",
    "/images/Card1-2.jpg",
    "/images/Card1-3.jpg",
  ];
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {isCardMedia ? (
          <CardMedia
            component="img"
            alt="超净间"
            height="140"
            image={imgUrl}
            title={title}
          />
        ) : (
          <div className="slide">
            <Slide images={images} intervalTime={5000} />
          </div>
          // <div className="card-img">
          //   <Slide images={images} intervalTime={3000} />
          //   {/* <img src={imgUrl} alt={imgTitle} title={imgTitle} /> */}
          // </div>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {body.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.text}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isShowButton ? (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleNavigateTo}
          >
            更多
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}

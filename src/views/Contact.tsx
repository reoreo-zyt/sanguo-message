import React from "react";
import MTitle from "@components/MTitle";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Map,
  APILoader,
  ScaleControl,
  ToolBarControl,
  ControlBarControl,
  Geolocation,
} from "@uiw/react-amap";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "start",
      marginBottom: "10px",
    },
    content: {
      display: "flex",
    },
    root: {
      width: "100%",
      margin: "10px 0",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    map: {
      width: "100%",
      marginLeft: "15px",
      marginBottom: "10px",
    },
  }),
);

const Demo = () => (
  <div>
    <Map style={{ height: 400 }}>
      <ScaleControl offset={[16, 30]} position="LB" />
      <ToolBarControl offset={[16, 10]} position="RB" />
      <ControlBarControl offset={[16, 180]} position="RB" />
      <Geolocation
        maximumAge={100000}
        borderRadius="5px"
        position="RB"
        offset={[16, 80]}
        zoomToAccuracy={true}
        showCircle={true}
      />
    </Map>
  </div>
);

export default function Contact() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const MTitleList = [
    { title: "联系我们", desc: "Contact  Us" },
    { title: "在线反馈", desc: "Online Feedback" },
  ];

  const handleChange =
    (panel: string) =>
    (event: React.ChangeEvent<object>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="about">
      <div className="container">
        <MTitle {...MTitleList[0]}></MTitle>
        <div className={classes.root}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>地址</Typography>
              <Typography className={classes.secondaryHeading}>
                xx市xx区xx镇xx路
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                详情地址描述：经过XX市区，xx区，xx镇，坐XX路公交车到xx站下车，步行XX米即可到达。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>邮箱</Typography>
              <Typography className={classes.secondaryHeading}>
                xx@yourdomain.com
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>xx@yourdomain.com</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>电话</Typography>
              <Typography className={classes.secondaryHeading}>
                010-80000000
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>010-80000000</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>传真</Typography>
              <Typography className={classes.secondaryHeading}>
                010-80000000
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>010-80000000</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <MTitle {...MTitleList[1]}></MTitle>
        <div className={classes.content}>
          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.form}>
              <TextField
                id="outlined-basic"
                label="姓名"
                defaultValue=""
                variant="filled"
              />
              <TextField
                id="outlined-basic"
                label="手机"
                defaultValue=""
                variant="filled"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                defaultValue=""
                variant="filled"
              />
              <TextField
                id="outlined-basic"
                label="内容"
                defaultValue=""
                variant="filled"
              />
            </div>
            <Button variant="contained" color="primary">
              提交信息
            </Button>
          </form>
          <div className={classes.map}>
            <APILoader version="2.0.5" akey="2073b5449b47e3e03ce5a9d46fed111c">
              <Demo />
            </APILoader>
          </div>
        </div>
      </div>
    </div>
  );
}

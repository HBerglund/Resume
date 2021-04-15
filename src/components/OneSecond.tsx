import { createStyles, makeStyles, Typography } from "@material-ui/core";
import Title from "./Title";
import mobileIcon from "../assets/mobileIcon.png";
import Iframe from "react-iframe";

function OneSecond() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {},
      mobileWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        position: "relative",
      },
      mobileImg: {
        height: "567px",
        marginLeft: "4px",
      },
      oneSecondVideo: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "13.5%",
        height: "420px",
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title title="One second" />
      <Typography>
        About a year ago, I decided to record one second of every day. Check out
        the video below to get a glimpse of my life!
      </Typography>
      <div className={classes.mobileWrapper}>
        <img
          className={classes.mobileImg}
          src={mobileIcon}
          alt="mobile-phone"
        />
        <Iframe
          url="https://player.vimeo.com/video/528713623?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0"
          width="360"
          height="640"
          allowFullScreen
          title="1second.mp4"
          className={classes.oneSecondVideo}
          frameBorder={0}
        ></Iframe>
      </div>
    </div>
  );
}

export default OneSecond;

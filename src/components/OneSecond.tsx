import {
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Title from "./Title";
import mobileIcon from "../assets/mobileIcon.png";
import Iframe from "react-iframe";

function OneSecond() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        padding: "2rem 0",
      },
      mobileWrapper: {
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
        position: "relative",
      },
      mobileImg: {
        height: "500px",
      },
      oneSecondVideo: {
        position: "absolute",
        top: "12%",
        height: "400px",
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title title="One second" />
      <Typography>
        About a year ago, I decided to record one second every day. You can see
        the result down below:
      </Typography>
      <div className={classes.mobileWrapper}>
        <img
          className={classes.mobileImg}
          src={mobileIcon}
          alt="mobile-phone"
        />
        <Iframe
          url="https://player.vimeo.com/video/528713623?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
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

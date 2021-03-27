import {
  createStyles,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import IntroText from "./IntroText";
import ProfileCard from "./ProfileCard";

function AboutMe() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        width: "100%",
        padding: "2rem 0",
        display: "flex",
        flexDirection: matchesMd ? "row" : "column",
        alignItems: "center",
        color: "white",
        marginTop: matchesMd ? "0rem" : "3rem",
      },
      aboutMeWrapper: {
        width: matchesMd ? "60%" : "100%",
      },
      profileCard: {
        width: matchesMd ? "40%" : "100%",
        display: "flex",
        justifyContent: "center",
      },
    })
  );
  const classes = useStyles();

  if (matchesMd) {
    return (
      <div className={classes.root}>
        <div className={classes.aboutMeWrapper}>
          <IntroText />
        </div>
        <div className={classes.profileCard}>
          <ProfileCard />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <ProfileCard />
        <div style={{ marginTop: "1rem" }}>
          <IntroText />
        </div>
      </div>
    );
  }
}

export default AboutMe;

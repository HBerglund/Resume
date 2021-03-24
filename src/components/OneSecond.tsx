import {
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Title from "./Title";
import mobileIcon from "../assets/mobileIcon.png";

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
      },
      mobileImg: {
        height: "500px",
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
      </div>
    </div>
  );
}

export default OneSecond;

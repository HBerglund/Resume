import {
  createStyles,
  Divider,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Title from "./Title";
import { jobs } from "../exports.js";
import PersonalExperience from "./PersonalExperience";
import Projects from "./Projects";

function Experience() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        padding: "2rem 0",
      },
      wrapper: {
        display: "flex",
        flexDirection: matchesMd ? "row" : "column",
        width: "100%",
      },
      widthWrapper: {
        width: matchesMd ? "60%" : "100%",
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title title="Experience" />
      <div className={classes.wrapper}>
        <div className={classes.widthWrapper}>
          <PersonalExperience />
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default Experience;

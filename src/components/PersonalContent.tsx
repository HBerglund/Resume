import {
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ProfileCard from "./ProfileCard";
import Title from "./Title";

function PersonalContent() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: matchesMd ? "row" : "column",
        alignItems: "center",
        color: "white",
        marginTop: matchesMd ? "0rem" : "3rem",
      },
      title: {},
    })
  );
  const classes = useStyles();

  if (matchesMd) {
    return (
      <div className={classes.root}>
        <div>
          <Title title="About me" />
          <Typography>
            My name is Herman Berglund and I'm an aspiring Front End Developer
            with a Project Manager background in the same field. Currently, I am
            based in Gothenburg, studying at Medieinstitutet, and will graduate
            in May 2022. At Medieinstitutets Front End developer program, we
            study the fundamentals of HTML5, CSS3, Javascript, Typescript, and
            much more. Throughout the program, we build applications and
            websites using popular front-end technologies such as React, JQuery,
            Bootstrap etc. I'm really starting to enjoy coding and I can't wait
            to bring my new found skills out in the working life!
          </Typography>
        </div>
        <ProfileCard />
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <ProfileCard />
        <div>
          <Typography variant="h5" component="h2">
            About me
          </Typography>
          <Typography>
            My name is Herman Berglund and I'm an aspiring Front End Developer
            with a Project Manager background in the same field. Currently, I am
            based in Gothenburg, studying at Medieinstitutet, and will graduate
            in May 2022. At Medieinstitutets Front End developer program, we
            study the fundamentals of HTML5, CSS3, Javascript, Typescript, and
            much more. Throughout the program, we build applications and
            websites using popular front-end technologies such as React, JQuery,
            Bootstrap etc. I'm really starting to enjoy coding and I can't wait
            to bring my new found skills out in the working life!
          </Typography>
        </div>
      </div>
    );
  }
}

export default PersonalContent;

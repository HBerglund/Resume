import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import profileImg from "../assets/profile.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function ProfileCard() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        marginTop: "-15rem ",
      },
      wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#44475a",
      },
      profileImg: {
        width: "15rem",
        marginBottom: "1rem",
      },
    })
  );
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  const githubUrl: string = "https://github.com/hberglund";
  const linkedInUrl: string =
    "https://linkedin.com/in/herman-berglund-8b8939100";

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <img className={classes.profileImg} src={profileImg} alt="" />
        <Typography component="h5" variant="h5">
          Hi, I'm Herman!
        </Typography>
        <Typography variant="body1">Aspiring Front End Developer</Typography>
        <div style={{ marginBottom: ".5rem" }}>
          <IconButton onClick={() => window.open(githubUrl, "_blank")}>
            <GitHubIcon fontSize="large" style={{ color: "#ff79c6" }} />
          </IconButton>
          <IconButton onClick={() => window.open(linkedInUrl, "_blank")}>
            <LinkedInIcon fontSize="large" style={{ color: "#ff79c6" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import profileImg from "../assets/profile.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function ProfileCard() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        position: "absolute",
        top: "-75%",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: "15rem",
      },
      wrapper: {
        width: "15rem",
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <img className={classes.profileImg} src={profileImg} alt="" />
        <Typography component="h5" variant="h5">
          Hi, I'm Herman!
        </Typography>
        <Typography variant="body1">Aspiring Front End Developer</Typography>
        <div style={{ marginBottom: ".5rem" }}>
          <IconButton>
            <GitHubIcon
              fontSize="large"
              style={{ color: theme.palette.secondary.main }}
            />
          </IconButton>
          <IconButton disableFocusRipple>
            <LinkedInIcon
              fontSize="large"
              style={{ color: theme.palette.secondary.main }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

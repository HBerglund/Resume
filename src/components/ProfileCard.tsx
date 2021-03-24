import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import profileImg from "../assets/profile.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function ProfileCard() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        width: "15rem",
        margin: "-15rem 1rem 0 1rem",
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
            <GitHubIcon fontSize="large" style={{ color: "#bd93f9" }} />
          </IconButton>
          <IconButton disableFocusRipple>
            <LinkedInIcon fontSize="large" style={{ color: "#bd93f9" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

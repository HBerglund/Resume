import {
  createStyles,
  Divider,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Title from "./Title";

function Experience() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        alignItems: "center",
        paddingTop: matchesMd
          ? "4rem"
          : "2rem" && matchesSm
          ? "2rem"
          : "0.8rem",
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Title title="Experience" />
      </div>
      <Typography variant="h5">Work experience</Typography>
      <div>
        <Typography>Project Manager / Digital Producer</Typography>
        <Typography>Small Mutiples - Sydney, Australia</Typography>
        <Typography>Nov 2018 - Aug 2020</Typography>
        <Divider light />
      </div>
      <div>
        <Typography>Project Manager</Typography>
        <Typography>Atea Sweden Ab - Vaxjo, Sweden</Typography>
        <Typography>May 2017 – Okt 2018</Typography>
        <Divider />
      </div>
    </div>
  );
}

export default Experience;

import {
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";

function Contact() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        backgroundColor: "#44475a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: matchesMd
          ? "4rem 0"
          : "2rem 0" && matchesSm
          ? "2rem 0"
          : "0.8rem 0",
      },
    })
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Let's get in touch!
      </Typography>
      <Typography variant="h5" component="h1">
        Herman Berglund
      </Typography>
      <Typography variant="h5">tel. +46 70 640 91 47</Typography>
      <Typography variant="h5">herman.e.berglund@gmail.com</Typography>
    </div>
  );
}

export default Contact;

import { createStyles, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import OneSecond from "./components/OneSecond";
import AboutMe from "./components/AboutMe";
import Section from "./components/Section";
import Experience from "./components/Experience";

function Home() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        backgroundColor: theme.palette.primary.main,
        marginTop: "15rem",
        color: "white",
      },
    })
  );
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <AboutMe />
        <Experience />
        <OneSecond />
      </Section>
    </div>
  );
}

export default Home;

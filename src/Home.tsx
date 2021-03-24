import { createStyles, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import OneSecond from "./components/OneSecond";
import PersonalContent from "./components/PersonalContent";
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
        <PersonalContent />
        <Experience />
        <OneSecond />
      </Section>
    </div>
  );
}

export default Home;

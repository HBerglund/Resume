import classes from "*.module.css";
import { createStyles, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import ProfileCard from "./components/ProfileCard";
import Section from "./components/Section";
import StartPageContainer from "./components/StartPageContainer";

function Home() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
      },
      wrapper: {
        position: "relative",
      },
    })
  );
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <div className={classes.wrapper}>
          <ProfileCard />
          <StartPageContainer />
        </div>
      </Section>
    </div>
  );
}

export default Home;

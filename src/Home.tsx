import { createStyles, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Section from "./components/Section";

function Home() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        backgroundColor: theme.palette.primary.main,
        marginTop: "15rem",
      },
    })
  );
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <PersonalInfo />
      </Section>
    </div>
  );
}

export default Home;

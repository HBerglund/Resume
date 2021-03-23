import { createStyles, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import ProfileCard from "./ProfileCard";
import Section from "./Section";

function StartPageContainer() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        backgroundColor: theme.palette.primary.main,
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

export default StartPageContainer;

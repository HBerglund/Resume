import {
  createStyles,
  Divider,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { jobs } from "../exports";
import Title from "./Title";

function PersonalExperience() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      divider: { background: "#bd93f9", marginBottom: "1rem" },
    })
  );
  const classes = useStyles();

  return (
    <div>
      <Title title="Work experience" subTitle />
      {jobs.map(({ role, location, period }) => (
        <div style={{ padding: "0 0 1rem 1rem" }}>
          <Typography style={{ fontWeight: "bold" }}>{role}</Typography>
          <Typography>{location}</Typography>
          <Typography>{period}</Typography>
        </div>
      ))}
      <Divider classes={{ root: classes.divider }} />
      <Title title="Education" subTitle />
      <div style={{ padding: "0 0 1rem 1rem" }}>
        <Typography style={{ fontWeight: "bold" }}>
          Front End Developer
        </Typography>
        <Typography>Medieinstitutet, Gothenburg</Typography>
        <Typography>Sep 2020 - May 2022 (ongoing)</Typography>
      </div>
      <Divider classes={{ root: classes.divider }} />
      <Title title="Technologies" subTitle />
      <div style={{ padding: "0 0 1rem 1rem" }}>
        <Typography>
          HTML, CSS, JavaScript/EcmaScript, Typescript, SQL, Git
        </Typography>
        <Typography>
          React, Material-UI, Bootstrap, JQuery, P5, TailwindCSS
        </Typography>
      </div>
    </div>
  );
}

export default PersonalExperience;

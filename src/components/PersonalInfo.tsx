import {
  createStyles,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";

function PersonalInfo() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      },
    })
  );
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography style={{ width: "40%" }}>
        My name is Herman Berglund and I'm an aspiring Front End Developer with
        a Project Manager background in the same field. Currently, I am based in
        Gothenburg, studying at Medieinstitutet, and will graduate in May 2022.
        At Medieinstitutets Front End developer program, we study the
        fundamentals of HTML5, CSS3, Javascript, Typescript, and much more.
        Throughout the program, we build applications and websites using popular
        front-end technologies such as React, JQuery, Bootstrap etc. I'm really
        starting to enjoy coding and I can't wait to bring my new found skills
        out in the working life!
      </Typography>
      <Typography style={{ width: "40%" }}>
        My name is Herman Berglund and I'm an aspiring Front End Developer with
        a Project Manager background in the same field. Currently, I am based in
        Gothenburg, studying at Medieinstitutet, and will graduate in May 2022.
        At Medieinstitutets Front End developer program, we study the
        fundamentals of HTML5, CSS3, Javascript, Typescript, and much more.
        Throughout the program, we build applications and websites using popular
        front-end technologies such as React, JQuery, Bootstrap etc. I'm really
        starting to enjoy coding and I can't wait to bring my new found skills
        out in the working life!
      </Typography>
    </div>
  );
}

export default PersonalInfo;

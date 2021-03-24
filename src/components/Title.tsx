import { Typography } from "@material-ui/core";
import React from "react";

interface Props {
  title: string;
}

function Title(props: Props) {
  return (
    <Typography variant="h4" component="h2" style={{ marginBottom: ".5rem" }}>
      {props.title}
    </Typography>
  );
}

export default Title;

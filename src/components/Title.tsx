import { Typography } from "@material-ui/core";
import React from "react";

interface Props {
  title: string;
  subTitle?: boolean;
}

function Title(props: Props) {
  if (props.subTitle) {
    return (
      <Typography
        variant="h5"
        style={{ color: "#bd93f9", marginBottom: "1rem" }}
      >
        {props.title}
      </Typography>
    );
  }
  return (
    <Typography variant="h4" component="h2" style={{ marginBottom: "1rem" }}>
      {props.title}
    </Typography>
  );
}

export default Title;

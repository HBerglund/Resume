import { Collapse, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { jobs } from "../exports";
import Title from "./Title";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function WorkPlaces() {
  const [smallMultiples, setSmallMultiples] = useState(false);
  const [ateaPm, setAteaPm] = useState(false);
  const [ateaCsm, setAteaCsm] = useState(false);

  const handleArrowClick = (workTitle: string) => {
    switch (workTitle) {
      case "smallMultiples":
        setSmallMultiples((prev) => !prev);
        break;
      case "ateaPm":
        setAteaPm((prev) => !prev);
        break;
      case "ateaCsm":
        setAteaCsm((prev) => !prev);
        break;
    }
  };

  const collapse = (workTitle: string) => {
    switch (workTitle) {
      case "smallMultiples":
        return smallMultiples;
      case "ateaPm":
        return ateaPm;
      case "ateaCsm":
        return ateaCsm;
    }
    return false;
  };

  return (
    <div>
      <Title title="Work experience" subTitle />
      {jobs.map(({ role, location, period, details, codeName, image }) => (
        <div
          key={role}
          style={{
            padding: "0 0 1rem 0rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: "1.5rem" }}>
            <img
              src={image}
              alt="logo"
              style={{ width: "4rem", height: "4rem", borderRadius: "50%" }}
            />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontWeight: "bold", marginRight: "1rem" }}>
                {role}
              </Typography>
              <IconButton
                style={{ color: "white", padding: "0" }}
                onClick={() => handleArrowClick(codeName)}
              >
                {collapse(codeName) ? (
                  <KeyboardArrowUpIcon style={{ fontSize: "2rem" }} />
                ) : (
                  <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                )}
              </IconButton>
            </div>
            <Typography>{location}</Typography>
            <Typography>{period}</Typography>
            <Collapse in={collapse(codeName)}>
              {details?.map(({ text }) => (
                <Typography variant="body1" key={text}>
                  {text}
                </Typography>
              ))}
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkPlaces;

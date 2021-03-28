import { Collapse, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { jobs } from "../exports";
import Title from "./Title";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function WorkPlaces() {
  const [smallMultiples, setSmallMultiples] = useState(false);
  const [atea, setAtea] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleArrowClick = (name: string) => {
    if (name === "atea") {
      setAtea((prev) => !prev);
    } else {
      setSmallMultiples((prev) => !prev);
    }
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <Title title="Work experience" subTitle />
      {jobs.map(({ role, location, period, details, codeName, image }) => (
        <div
          style={{
            padding: "0 0 1rem 1rem",
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
                {isClicked ? (
                  <KeyboardArrowUpIcon style={{ fontSize: "2rem" }} />
                ) : (
                  <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                )}
              </IconButton>
            </div>
            <Typography>{location}</Typography>
            <Typography>{period}</Typography>
            <Collapse in={codeName === "atea" ? atea : smallMultiples}>
              {details?.map(({ text }) => (
                <Typography variant="body1">{text}</Typography>
              ))}
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkPlaces;

import { Collapse, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { jobs } from "../exports";
import Title from "./Title";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function WorkPlaces() {
  const [smallMultiples, setSmallMultiples] = useState(false);
  const [atea, setAtea] = useState(false);

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
                onClick={() =>
                  codeName === "atea"
                    ? setAtea((prev) => !prev)
                    : setSmallMultiples((prev) => !prev)
                }
              >
                <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
              </IconButton>
            </div>
            <Typography>{location}</Typography>
            <Typography>{period}</Typography>
            <Collapse in={codeName === "atea" ? atea : smallMultiples}>
              {details?.map(({ text }) => (
                <Typography variant="body2">{text}</Typography>
              ))}
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkPlaces;

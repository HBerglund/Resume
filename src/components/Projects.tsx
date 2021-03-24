import {
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { formatDate } from "../exports";

function Projects() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      divider: { background: "#bd93f9", marginBottom: "1rem" },
      repo: {
        backgroundColor: "#44475a",
        padding: "1rem",
        margin: "0 0 1rem 1rem",
        cursor: "pointer",
      },
    })
  );
  const classes = useStyles();

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function githubReposFetch() {
      const dataPath = "https://api.github.com/users/HBerglund/repos";
      const response = await fetch(dataPath);
      const result = await response.json();
      setRepos(result);
    }
    githubReposFetch();
  }, []);

  const [isHovered, setIsHovered] = useState("");

  const handleHover = (name: string) => {
    setIsHovered(name);
  };

  return (
    <div>
      <Title title="Projects" subTitle />
      {repos.map(({ html_url, name, full_name, description, updated_at }) => (
        <div
          className={classes.repo}
          key={name}
          onMouseEnter={() => handleHover(name)}
          onMouseLeave={() => setIsHovered("")}
          onClick={() => window.open(html_url, "_blank")}
          style={{
            border:
              isHovered === name ? "1px solid #ff79c6" : "1px solid #bd93f9",
            borderBottom:
              isHovered === name ? "5px solid #ff79c6" : "5px solid #bd93f9",
          }}
        >
          <Typography variant="body1">{full_name}</Typography>
          <Typography variant="body2">{description}</Typography>
          <Typography variant="body2">
            Last updated: {formatDate(updated_at)}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default Projects;

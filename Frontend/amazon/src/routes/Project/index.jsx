import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Header from "../../Components/Header";
import "./Project.css";
import { projectData } from "./staticProjectData";
import ProjectCard from "./components/ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import { mediaURL } from "../../Utils/Constants";

export default function Project() {
  const { features, createdWith, projectSpan, usedTools } = projectData;
  return (
    <>
      <Header />
      <div className="project">
        <img
          className="project__heading-logo"
          src={`${mediaURL}/amazon-redesign-icon.png`}
          alt=""
        />
        <div className="project__in-progress">
          Still in progress&nbsp;
          <AccessTimeIcon style={{ fontSize: 14 }} />
        </div>
        <div className="project__grid">
          <ProjectCard title="Features" items={features} />
          <ProjectCard title="Created with" items={createdWith} />
          <ProjectCard title="Project span" items={projectSpan} />
        </div>
        <ProjectCard title="Used for this" items={usedTools} grid />
        <a
          href="https://github.com/Vitaliy-Steffensen/amazon-redesign"
          className="project__git"
        >
          <GitHubIcon style={{ fontSize: 18 }} />
          &nbsp;View the source code
        </a>
      </div>
    </>
  );
}

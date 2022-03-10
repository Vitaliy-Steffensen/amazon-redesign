import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, items, grid }) {
  return (
    <div className="project-card">
      <h2 className="project-card__title">{title}</h2>
      <div
        className={`project-card__card ${grid && "project-card__card--grid"}`}
      >
        {items.map((item) => (
          <p className="project-card__item">{item}</p>
        ))}
      </div>
    </div>
  );
}

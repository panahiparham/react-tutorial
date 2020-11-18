import React, { Component } from "react";

import data from "../data.json";

import "./ProjectsSection.css";

export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="projects-section">
        <h3>{data.sections[1].title}</h3>

        <h4>{data.sections[1].subtitle}</h4>

        <div className="projects-wrapper">
          {data.sections[1].items.map((project) => {
            return (
              <div className="project">
                <h4>
                  <a href={project.content.link}>{project.content.title}</a>
                </h4>

                <p>{project.content.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

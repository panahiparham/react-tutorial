import React, { Component } from "react";

import data from "../data.json";

import "./AboutSection.css";

import Button from "./Button";


export default class AboutSection extends Component {

  render() {   

    return (
        <div className="about-section">
          <h3>{data.sections[0].title}</h3>

          <p>{data.sections[0].items[0].content}</p>

          <Button goto="projects" icon={data.icons.down} className="goto-projects" />

        </div>
    );
  }
}
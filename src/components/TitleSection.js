import React, { Component } from "react";

import data from "../data.json";

import "./TitleSection.css";

export default class TitleSection extends Component {

  render() {   

    return (
        <div className="title-section">

          <h1>{data.title}</h1>

          <h2>{data.subtitle}</h2>
        </div>
    );
  }
}
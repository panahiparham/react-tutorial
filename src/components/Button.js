import React, { Component } from "react";

import "./Button.css";

import { Link } from "react-scroll";

export default class Button extends Component {
  render() {
    const { icon, goto, className } = this.props;

    return (
      <div className={`button ${className}`}>
        <Link
          activeClass="active"
          to={goto}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <img src={icon} alt="button" style={{maxWidth:"30px"}}/>
        </Link>
      </div>
    );
  }
}

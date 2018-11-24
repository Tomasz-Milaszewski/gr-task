import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroWeeks.css";
class HeroWeeks extends Component {

  state = {
    currentWeek: 7
  }

  static propTypes = {
    weeks: PropTypes.array
  }

  render() {
    return (
      <nav className="Navigation-container">
        <div className="Navigation-content-container">
          <div className={this.state.activeViewName === "DASHBOARD" ? "Navigation-content-active" : "Navigation-content-passive"}><a href="" onClick={this.handleClick}>DASHBOARD<hr /></a></div>
          <div className={this.state.activeViewName === "RECIPES" ? "Navigation-content-active" : "Navigation-content-passive"}><a href="" onClick={this.handleClick}>RECIPES<hr /></a></div>
          <div className={this.state.activeViewName === "CHALLENGE" ? "Navigation-content-active" : "Navigation-content-passive"}><a href="" onClick={this.handleClick}>CHALLENGE<hr /></a></div>
        </div>
        <div className="Navigation-user-container">
          <div className="Navigation-user-image"></div>
          <div className="Navigation-user-name">Olivia Wilde</div>
          <div className="Navigation-user-chevron"></div>
        </div>
      </nav>
    )
  }
}

export default HeroWeeks

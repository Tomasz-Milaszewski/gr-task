import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroDays.css";
import HeroDaysHours from '../HeroDaysHours/HeroDaysHours'
import HeroDaysOn from '../HeroDaysOn/HeroDaysOn'
import HeroDayOff from '../HeroDayOff/HeroDayOff'
class HeroDays extends Component {

  static propTypes = {
    currentWeekDays: PropTypes.array
  }

  render() {
    return (
      <div className="HeroDays-container">
        <HeroDaysHours></HeroDaysHours>
        <HeroDaysOn currentWeekDays={this.props.currentWeekDays}></HeroDaysOn>
        <HeroDayOff currentWeekDays={this.props.currentWeekDays}></HeroDayOff>
      </div>
    )
  }
}

export default HeroDays
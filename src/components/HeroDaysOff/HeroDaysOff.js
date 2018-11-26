import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroDaysOff.css";
import printer from '../../images/herodaysoff-printer.png'
import smiley from '../../images/herodaysoff-smiley.png'
class HeroDaysOff extends Component {

  static propTypes = {
    currentWeekDays: PropTypes.array
  }

getDayNumber

  render() {
    const days = this.props.currentWeekDays;
    return (
      <div className="HeroDaysOff-container">
        <div className="HeroDaysOff-day-number">DAY {days.length !== 0 && days[6].dayNumber}</div>
        <div className="HeroDaysOff-main">
          <p className="HeroDaysOff-main-text">GUILT-FREE DAY</p>
          <img src={smiley} alt=""></img>
        </div>
        <div className="HeroDaysOff-printer">
        <p className="HeroDaysOff-printer-text">Print</p>
          <img src={printer} alt=""></img>
        </div>
      </div>
    )
  }
}

export default HeroDaysOff
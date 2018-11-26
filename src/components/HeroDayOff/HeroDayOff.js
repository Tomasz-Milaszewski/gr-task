import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroDayOff.css";
import printer from '../../images/herodayoff-printer.png'
import smiley from '../../images/herodayoff-smiley.png'
class HeroDayOff extends Component {

  static propTypes = {
    currentWeekDays: PropTypes.array
  }

  getDayNumber

  render() {
    const days = this.props.currentWeekDays;
    return (
      <div className="HeroDayOff-container">
        <div className="HeroDayOff-day-number">DAY {days.length !== 0 && days[6].dayNumber}</div>
        <div className="HeroDayOff-main">
          <div className="HeroDayOff-main-text">GUILT-FREE DAY</div>
          <img src={smiley} alt="" className="HeroDayOff-main-image"></img>
        </div>
        <div className="HeroDayOff-printer">
          <p className="HeroDayOff-printer-text">Print</p>
          <img src={printer} alt=""></img>
        </div>
      </div>
    )
  }
}

export default HeroDayOff
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroDaysOn.css";
import tick from '../../images/herodayson-tick.png'
class HeroDaysOn extends Component {

  static propTypes = {
    currentWeekDays: PropTypes.array
  }


  render() {
    console.log(this.props.currentWeekDays);
    return (
      <div className="HeroDaysOn-container">
        {/* <div className="HeroDaysOn-day-number">DAY{this.props.day.dayNumber}</div>
        <div className={this.props.day.sixAMShake === true ? "HeroDaysOn-meal HeroDaysOn-bode-shake" : "HeroDaysOn-meal"}>
          <p className="HeroDaysOn-meal-name">{this.props.day.sixAMMeal}</p>
          {this.props.day.sixAMTick === true && <img src={tick} alt="" className="HeroDaysOn-tick"></img>}
        </div> */}
      </div>
    )
  }
}

export default HeroDaysOn
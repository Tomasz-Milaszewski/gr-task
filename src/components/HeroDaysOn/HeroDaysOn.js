import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroDaysOn.css";
import tick from '../../images/herodayson-tick.png'
class HeroDaysOn extends Component {

  static propTypes = {
    currentWeekDays: PropTypes.array
  }

  render() {
    const days = this.props.currentWeekDays;
    const hours = ['sixAM', 'nine', 'twelve', 'three', 'sixPM'];
    console.log(days);
    return (
      <div className="HeroDaysOn-container">
        {days.map((el, index) => 
          <div className="HeroDaysOn-day-number">DAY{el.dayNumber}</div>
            // {}

        )}
          {/* <div className={this.props.day.sixAMShake === true ? "HeroDaysOn-meal HeroDaysOn-bode-shake" : "HeroDaysOn-meal"}>
          <p className="HeroDaysOn-meal-name">{this.props.day.sixAMMeal}</p>
          {this.props.day.sixAMTick === true && <img src={tick} alt="" className="HeroDaysOn-tick"></img>} */}
      </div>
    )
  }
}

export default HeroDaysOn

// currentWeekDays [
//   index 0:
//    {
//     "dayNumber": "64",
//     "isOn": true,
//     "sixAMMeal": "Bod&middot;&emacr; Shake",
//     "sixAMShake": true,
//     "sixAMTick": true,
//     "nineMeal": "Ham and Swiss Roll Ups",
//     "nineShake": false,
//     "nineTick": true,
//     "twelveMeal": "Turkey Melt",
//     "twelveShake": false,
//     "twelveTick": true,
//     "threeMeal": "Bod&middot;&emacr; Burn with Mozarella and Tomato Slices",
//     "threeShake": false,
//     "threeTick": true,
//     "sixPMMeal": "Turkey Melt",
//     "sixPMShake": false,
//     "sixPMTick": false,
//     "lowCarb": true,
//     "workoutDone": true
//   } itd ]
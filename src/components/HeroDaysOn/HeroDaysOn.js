import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroDaysOn.css";
import tick from '../../images/herodayson-tick.png'
import workout_done from '../../images/herodayson-workout-done.png'
import workout_notdone from '../../images/herodayson-workout-notdone.png'
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
        {days.map((day) =>
          <div className="HeroDaysOn-single-day">
            <div className="HeroDaysOn-day-number">DAY {day.dayNumber}</div>
            {hours.map((hour) =>
              <div className={day[`${hour}Shake`] === true ? "HeroDaysOn-meal-cont HeroDaysOn-bode-shake" : "HeroDaysOn-meal-cont"}>
                <p className="HeroDaysOn-meal-name">{day[`${hour}Meal`]}</p>
                {day[`${hour}Tick`] === true && <img src={tick} alt="" className="HeroDaysOn-tick"></img>}
              </div>
            )}
            <div className="HeroDaysOn-bottom">{day.lowCarb === true ? 'LOW-CARB' : 'HIGH-CARB'}</div>
            <div className="HeroDaysOn-workout"> {day.workoutDone === true ? <img src={workout_done} alt=""></img> : <img src={workout_notdone} alt=""></img>}</div>
          </div>
        )}
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
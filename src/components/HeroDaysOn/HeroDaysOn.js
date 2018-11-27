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
    const days = this.props.currentWeekDays.slice(0,6);
    const hours = ['sixAM', 'nine', 'twelve', 'three', 'sixPM'];
    return (
      <div className="HeroDaysOn-container">
        {days.map((day, dayIndex) =>
          <div key={dayIndex} className="HeroDaysOn-single-day">
            <div className="HeroDaysOn-day-number"><span>DAY&nbsp;</span>{day.dayNumber}</div>
            {hours.map((hour, hourIndex) =>
              <div key={`${dayIndex}${hourIndex}`} className={day[`${hour}Shake`] === true ? "HeroDaysOn-meal-cont HeroDaysOn-bode-shake" : "HeroDaysOn-meal-cont"}>
                <p className="HeroDaysOn-meal-name">
                  {day[`${hour}Tick`] === true && <img src={tick} alt="" className="HeroDaysOn-tick" align="top"></img>}
                  {day[`${hour}Meal`]}
                </p>
              </div>
            )}
            <div className="HeroDaysOn-bottom">{day.lowCarb === true ? 'LOW' : 'HIGH'}</div>
            <div className="HeroDaysOn-workout"> {day.workoutDone === true ? <img src={workout_done} alt=""></img> : <img src={workout_notdone} alt=""></img>}</div>
          </div>
        )}
      </div>
    )
  }
}

export default HeroDaysOn
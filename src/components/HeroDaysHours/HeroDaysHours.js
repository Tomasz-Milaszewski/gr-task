import React, { Component } from "react";
import "./HeroDaysHours.css";
class HeroDaysHours extends Component {

  render() {
    return (
      <div className="HeroDaysHours-container">
        <div className="HeroDaysHours-top"></div>
        <div className="HeroDaysHours-hour"><b>6:00</b>AM</div>
        <div className="HeroDaysHours-hour"><b>9:00</b>AM</div>
        <div className="HeroDaysHours-hour"><b>12:00</b>PM</div>
        <div className="HeroDaysHours-hour"><b>3:00</b>PM</div>
        <div className="HeroDaysHours-hour-last"><b>6:00</b>PM</div>
        <div className="HeroDaysHours-bottom"></div>
        <div className="HeroDaysHours-bottom-workout">Workout&nbsp;<small>&#9658;</small></div>
      </div>
    )
  }
}

export default HeroDaysHours
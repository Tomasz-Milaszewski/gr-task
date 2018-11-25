import React, { Component } from "react";
import "./HeroDaysHours.css";
class HeroDaysHours extends Component {

  render() {
    return (
      <div className="HeroDaysHours-container">
        <div className="HeroDaysHours-top"></div>
        <div className="HeroDaysHours-hour"><strong>6:00</strong> AM</div>
        <div className="HeroDaysHours-hour"><strong>9:00</strong> AM</div>
        <div className="HeroDaysHours-hour"><strong>12:00</strong> PM</div>
        <div className="HeroDaysHours-hour"><strong>3:00</strong> PM</div>
        <div className="HeroDaysHours-hour-last"><strong>6:00</strong> PM</div>
        <div className="HeroDaysHours-bottom"></div>
        <div className="HeroDaysHours-bottom-workout">Workout&#9658;</div>
      </div>
    )
  }
}

export default HeroDaysHours
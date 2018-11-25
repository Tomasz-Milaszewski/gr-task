import React, { Component } from "react";
import "./HeroDays.css";
import HeroDaysHours from '../HeroDaysHours/HeroDaysHours'
// import HeroDaysOn from '../HeroDaysOn/HeroDaysOn'
// import HeroDaysOff from '../HeroDaysOff/HeroDaysOff'
class HeroDays extends Component {

  render() {
    return (
      <div className="HeroDays-container">
        <HeroDaysHours></HeroDaysHours>
        {/* <HeroDaysOn></HeroDaysOn> */}
        {/* <HeroDaysOff></HeroDaysOff> */}
      </div>
    )
  }
}

export default HeroDays
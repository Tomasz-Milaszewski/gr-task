import React, { Component } from "react";
import "./HeroOptions.css";
import broccoli_active from '../../images/herooptions-broccoli-active.png'
import broccoli_nonactive from '../../images/herooptions-broccoli-nonactive.png'

class HeroOptions extends Component {

  render() {
    return (
      <div className="HeroOptions-container">
        <p>SELECT YOUR PROTEIN OPTIONS</p>
        <div className="HeroOptions-icons-container">
          <img src={broccoli_active} alt="Broccoli" />
        </div>
      </div>
    )
  }
}

export default HeroOptions
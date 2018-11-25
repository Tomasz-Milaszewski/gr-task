import React, { Component } from "react";
import "./HeroOptions.css";
import broccoli_active from '../../images/herooptions-broccoli-active.png'
import broccoli_nonactive from '../../images/herooptions-broccoli-nonactive.png'
import cheese_active from '../../images/herooptions-cheese-active.png'
import cheese_nonactive from '../../images/herooptions-cheese-nonactive.png'
import meat_active from '../../images/herooptions-meat-active.png'
import meat_nonactive from '../../images/herooptions-meat-nonactive.png'
import fish_active from '../../images/herooptions-fish-active.png'
import fish_nonactive from '../../images/herooptions-fish-nonactive.png'
import chicken_active from '../../images/herooptions-chicken-active.png'
import chicken_nonactive from '../../images/herooptions-chicken-nonactive.png'
class HeroOptions extends Component {

  render() {
    return (
      <div className="HeroOptions-container">
        <p>SELECT YOUR PROTEIN OPTIONS</p>
        <div className="HeroOptions-icons-container">
          <img src={broccoli_active} alt="Broccoli" />
          <img src={cheese_active} alt="Cheese" />
          <img src={meat_active} alt="Meat" />
          <img src={fish_active} alt="Fish" />
          <img src={chicken_active} alt="Chicken" />
        </div>
      </div>
    )
  }
}

export default HeroOptions
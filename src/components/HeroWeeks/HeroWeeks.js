import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroWeeks.css";
class HeroWeeks extends Component {

  state = {
    currentWeek: 7
  }

  static propTypes = {
    weeks: PropTypes.array
  }

  render() {
    return (
      <div class="HeroWeeks-container">
        
        <div class="HeroWeeks-progress-container">
          <p>	YOUR 12 WEEK PROGRESS</p>
          <div class="HeroWeeks-bullets-container">
            <span></span> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="HeroWeeks-week-numbers-container">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
          </div>
        </div>
        
        <div class="HeroWeeks-slider-container">
          <button class="HeroWeeks-slider-arrow-left"></button>
          <p class="HeroWeeks-slider-current-week">{`Week ${this.state.currentWeek}`}</p>
          <button class="HeroWeeks-slider-arrow-right"></button>
        </div>
      </div>
    )
  }
}

export default HeroWeeks

// {'&#8226'} full bullet
// {'&#9702'} empty bullet
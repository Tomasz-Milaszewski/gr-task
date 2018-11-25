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

  renderWeeksBullets = () => {
    const classesArray = [];
    for (let i = 1; i <= this.props.weeks.length; i++) {
      if (i < this.state.currentWeek) {
        if (i === 1) {
          classesArray.push('bullet-past')
        } else {
          classesArray.push('line-past');
          classesArray.push('bullet-past');
        }
      } else {
        if (i === this.state.currentWeek) {
          i !== 1 && classesArray.push('line-future');
          classesArray.push('bullet-empty');
        } else {
          classesArray.push('line-future');
          classesArray.push('bullet-future');
        }
      }
    }
    console.log(classesArray);
    return classesArray;
  };

  render() {
    return (
      <div className="HeroWeeks-container">

        <div className="HeroWeeks-progress-container">
          <p>	YOUR 12 WEEK PROGRESS</p>
          <div className="HeroWeeks-bullets-container">
            {this.renderWeeksBullets().map((element) =>
              <span className={element}></span>
            )}
          </div>
          <div className="HeroWeeks-week-numbers-container">
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

        <div className="HeroWeeks-slider-container">
          <button className="HeroWeeks-slider-arrow-left"></button>
          <p className="HeroWeeks-slider-current-week">{`Week ${this.state.currentWeek}`}</p>
          <button className="HeroWeeks-slider-arrow-right"></button>
        </div>
      </div>
    )
  }
}

export default HeroWeeks

// {'&#8226'} full bullet
// {'&#9702'} empty bullet
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroWeeks.css";
class HeroWeeks extends Component {

  static propTypes = {
    weeks: PropTypes.array,
    currentWeekNumber: PropTypes.number,
    handleClickLeft: PropTypes.func,
    handleClickRight: PropTypes.func,
  }

  renderWeeksBullets = () => {
    const classesArray = [];
    for (let i = 1; i <= this.props.weeks.length; i++) {
      if (i < this.props.currentWeekNumber) {
        if (i === 1) {
          classesArray.push('bullet-past')
        } else {
          classesArray.push('line-past');
          classesArray.push('bullet-past');
        }
      } else {
        if (i === this.props.currentWeekNumber) {
          i !== 1 && classesArray.push('line-future');
          classesArray.push('bullet-empty');
        } else {
          classesArray.push('line-future');
          classesArray.push('bullet-future');
        }
      }
    }
    return classesArray;
  };

  renderWeeksNumbers = () => {
    const numbersArray = [];
    for (let i = 1; i <= this.props.weeks.length; i++) {
      numbersArray.push(i);
    }
    return numbersArray;
  };

  handleClickL = () => {
    this.props.handleClickLeft();
  }
  handleClickR = () => {
    this.props.handleClickRight();
  }

  render() {
    return (
      <div className="HeroWeeks-container">

        <div className="HeroWeeks-progress-container">
          <p>{`YOUR ${this.props.weeks.length} WEEK PROGRESS`}</p>
          <div className="HeroWeeks-bullets-container">
            {this.renderWeeksBullets().map((el, index) =>
              <span key={index} className={el}></span>
            )}
          </div>
          <div className="HeroWeeks-week-numbers-container">
            {this.renderWeeksNumbers().map((el, index) =>
              <span key={index}>{el}</span>
            )}
          </div>
        </div>

        <div className="HeroWeeks-slider-container">
          <button className="HeroWeeks-slider-arrow-left" style={(this.props.currentWeekNumber === 1) ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={this.handleClickL}></button>
          <p className="HeroWeeks-slider-current-week">{`Week ${this.props.currentWeekNumber}`}</p>
          <button className="HeroWeeks-slider-arrow-right" style={(this.props.currentWeekNumber === this.props.weeks.length) ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={this.handleClickR}></button>
        </div>
      </div>
    )
  }
}

export default HeroWeeks
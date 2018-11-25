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
    return classesArray;
  };

  renderWeeksNumbers = () => {
    const numbersArray = [];
    for (let i = 1; i <= this.props.weeks.length; i++) {
      numbersArray.push(i);
    }
    return numbersArray;
  };

  handleClickLeft = () => {
    this.setState({ currentWeek: this.state.currentWeek - 1 })
  }
  handleClickRight = () => {
    this.setState({ currentWeek: this.state.currentWeek + 1 })
  }

  render() {
    return (
      <div className="HeroWeeks-container">

        <div className="HeroWeeks-progress-container">
          <p>{`YOUR ${this.props.weeks.length} WEEK PROGRESS`}</p>
          <div className="HeroWeeks-bullets-container">
            {this.renderWeeksBullets().map((element) =>
              <span className={element}></span>
            )}
          </div>
          <div className="HeroWeeks-week-numbers-container">
            {this.renderWeeksNumbers().map((el) =>
              <span>{el}</span>
            )}
          </div>
        </div>

        <div className="HeroWeeks-slider-container">
          <button className="HeroWeeks-slider-arrow-left" style={(this.state.currentWeek === 1) ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={this.handleClickLeft}></button>
          <p className="HeroWeeks-slider-current-week">{`Week ${this.state.currentWeek}`}</p>
          <button className="HeroWeeks-slider-arrow-right" style={(this.state.currentWeek === this.props.weeks.length) ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={this.handleClickRight}></button>
        </div>
      </div>
    )
  }
}

export default HeroWeeks
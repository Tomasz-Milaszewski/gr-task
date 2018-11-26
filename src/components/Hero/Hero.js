import React, { Component } from "react";
import "./Hero.css";
import HeroWeeks from '../HeroWeeks/HeroWeeks'
import HeroOptions from '../HeroOptions/HeroOptions'
import HeroDays from '../HeroDays/HeroDays'
class Hero extends Component {

  state = {
    weeks: [],
    currentWeekNumber: 7,
    currentWeekDays: []
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/weeks.json")
      .then(response => response.json())
      .then(objectOfWeeks =>
        this.setState({
          weeks: Object.entries(objectOfWeeks).map(([id, other]) => ({ id, ...other })),
          currentWeekDays: Object.entries(objectOfWeeks).map(([id, other]) => ({ id, ...other })).find((el) => {
            return el.weekNumber === this.state.currentWeekNumber
          }).days
        })
      );
  }

  handleClickLeft = () => {
    this.setState({ currentWeekNumber: this.state.currentWeekNumber - 1 })
  }
  handleClickRight = () => {
    this.setState({ currentWeekNumber: this.state.currentWeekNumber + 1 })
  }

  render() {
    console.log(this.state.weeks)
    console.log(this.state.currentWeekDays)
    return (
      <div className="Hero-container">
        <div className="Hero-weeks-options-container">
          <HeroWeeks weeks={this.state.weeks} currentWeekNumber={this.state.currentWeekNumber} handleClickLeft={this.handleClickLeft} handleClickRight={this.handleClickRight}></HeroWeeks>
          <HeroOptions></HeroOptions>
        </div>
        <div className="Hero-days-container">
          <HeroDays></HeroDays>
        </div>
      </div>
    )
  }
}

export default Hero
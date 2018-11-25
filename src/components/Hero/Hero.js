import React, { Component } from "react";
import "./Hero.css";
import HeroWeeks from '../HeroWeeks/HeroWeeks'
import HeroOptions from '../HeroOptions/HeroOptions'
import HeroDays from '../HeroDays/HeroDays'
class Hero extends Component {

  state = {
    weeks: []
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/weeks.json")
      .then(response => response.json())
      .then(objectOfWeeks =>
        this.setState({
          weeks: Object.entries(objectOfWeeks).map(([id, other]) => ({ id, ...other }))
        })
      );
  }

  render() {
    console.log(this.state.weeks)
    return (
      <div className="Hero-container">
        <div className="Hero-weeks-options-container">
          <HeroWeeks weeks={this.state.weeks}></HeroWeeks>
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
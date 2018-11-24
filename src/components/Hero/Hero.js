import React, { Component } from "react";
import "./Hero.css";
import HeroWeeks from '../HeroWeeks/HeroWeeks'
// import HeroOptions from '../HeroOptions/HeroOptions'
// import HeroDays from '../HeroDays/HeroDays'
class Hero extends Component {

  state = {
    weeks: [
      {
        weekNumber: 7,
        days: [
          {
            dayNumber: "64",
            isOn: true,
            sixAMMeal: "Bod&middot;&emacr; Shake",
            sixAMShake: true,
            sixAMTick: true,
            nineMeal: "Ham and Swiss Roll Ups",
            nineShake: false,
            nineTick: true,
            twelveMeal: "Turkey Melt",
            twelveShake: false,
            twelveTick: true,
            threeMeal: "Bod&middot;&emacr; Burn with Mozarella and Tomato Slices",
            threeShake: false,
            threeTick: true,
            sixPMMeal: "Turkey Melt",
            sixPMShake: false,
            sixPMTick: false,
            lowCarb: true,
            workoutDone: true
          },
          {
            dayNumber: "65",
            isOn: true,
            sixAMMeal: "Bod&middot;&emacr; Shake",
            sixAMShake: true,
            sixAMTick: false,
            nineMeal: "Ham and Swiss Roll Ups",
            nineShake: false,
            nineTick: false,
            twelveMeal: "Turkey Melt",
            twelveShake: false,
            twelveTick: false,
            threeMeal: "Bod&middot;&emacr; Burn with Mozarella and Tomato Slices",
            threeShake: false,
            threeTick: false,
            sixPMMeal: "Turkey Melt",
            sixPMShake: false,
            sixPMTick: false,
            lowCarb: true,
            workoutDone: true
          },
          {
            dayNumber: "66",
            isOn: true,
            sixAMMeal: "Bod&middot;&emacr; Shake",
            sixAMShake: true,
            sixAMTick: false,
            nineMeal: "Grilled Steak (HC)",
            nineShake: false,
            nineTick: false,
            twelveMeal: "Bod&middot;&emacr; Shake",
            twelveShake: true,
            twelveTick: false,
            threeMeal: "Bod&middot;&emacr; Burn and Whole-Wheat English Muffin with Butter Spray",
            threeShake: false,
            threeTick: false,
            sixPMMeal: "Garlic Lime Chicken (HC)",
            sixPMShake: false,
            sixPMTick: false,
            lowCarb: false,
            workoutDone: false
          },
          {
            dayNumber: "67",
            isOn: true,
            sixAMMeal: "Bod&middot;&emacr; Shake",
            sixAMShake: true,
            sixAMTick: false,
            nineMeal: "Ham and Swiss Roll Ups",
            nineShake: false,
            nineTick: false,
            twelveMeal: "Turkey Melt",
            twelveShake: false,
            twelveTick: false,
            threeMeal: "Bod&middot;&emacr; Burn with Mozarella and Tomato Slices",
            threeShake: false,
            threeTick: false,
            sixPMMeal: "Turkey Melt",
            sixPMShake: false,
            sixPMTick: false,
            lowCarb: true,
            workoutDone: false
          },
          {
            dayNumber: "68",
            isOn: true,
            sixAMMeal: "Bod&middot;&emacr; Shake",
            sixAMShake: true,
            sixAMTick: false,
            nineMeal: "Ham and Swiss Roll Ups",
            nineShake: false,
            nineTick: false,
            twelveMeal: "Turkey Melt",
            twelveShake: true,
            twelveTick: false,
            threeMeal: "Bod&middot;&emacr; Burn with Mozarella and Tomato Slices",
            threeShake: false,
            threeTick: false,
            sixPMMeal: "Turkey Melt",
            sixPMShake: false,
            sixPMTick: false,
            lowCarb: true,
            workoutDone: false
          },
          {
            dayNumber: "69",
            isOn: true,
            sixAMMeal: "Bod&middot;&emacr; Shake",
            sixAMShake: true,
            sixAMTick: false,
            nineMeal: "Grilled Steak (HC)",
            nineShake: false,
            nineTick: false,
            twelveMeal: "Bod&middot;&emacr; Shake",
            twelveShake: true,
            twelveTick: false,
            threeMeal: "Bod&middot;&emacr; Burn and Whole-Wheat English Muffin with Butter Spray",
            threeShake: false,
            threeTick: false,
            sixPMMeal: "Garlic Lime Chicken (HC)",
            sixPMShake: false,
            sixPMTick: false,
            lowCarb: false,
            workoutDone: false
          },
          {
            dayNumber: "70",
            isOn: false,
            sixAMMeal: "Bod&middot;&emacr; Shake",
            sixAMShake: true,
            sixAMTick: false,
            nineMeal: "Ham and Swiss Roll Ups",
            nineShake: false,
            nineTick: false,
            twelveMeal: "Turkey Melt",
            twelveShake: true,
            twelveTick: false,
            threeMeal: "Bod&middot;&emacr; Burn with Mozarella and Tomato Slices",
            threeShake: false,
            threeTick: false,
            sixPMMeal: "Turkey Melt",
            sixPMShake: false,
            sixPMTick: false,
            lowCarb: true,
            workoutDone: false
          },
        ],
      }
    ]
  }

  render() {
    return (
      <div class="Hero-container">
        <div class="Hero-weeks-options-container">
          <HeroWeeks weeks={this.state.weeks}></HeroWeeks>
          {/* <HeroOptions></HeroOptions> */}
        </div>
        {/* <HeroDays></HeroDays> */}
      </div>
    )
  }
}

export default Hero
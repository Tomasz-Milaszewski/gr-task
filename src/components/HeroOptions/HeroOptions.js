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

  state = {
    broccoliClicks: 0,
    cheeseClicks: 0,
    meatClicks: 0,
    fishClicks: 0,
    chickenClicks: 0
  }

  handleClick = (event) => {
    let clicked = event.target.name;
    switch (clicked) {
      case 'broccoli':
        this.setState({ broccoliClicks: this.state.broccoliClicks + 1 })
        break;
      case 'cheese':
        this.setState({ cheeseClicks: this.state.cheeseClicks + 1 })
        break;
      case 'meat':
        this.setState({ meatClicks: this.state.meatClicks + 1 })
        break;
      case 'fish':
        this.setState({ fishClicks: this.state.fishClicks + 1 })
        break;
      case 'chicken':
        this.setState({ chickenClicks: this.state.chickenClicks + 1 })
        break;
      default: break;
    }
  }

  render() {
    return (
      <div className="HeroOptions-container">
        <p>SELECT YOUR PROTEIN OPTIONS</p>
        <div className="HeroOptions-icons-container">
          <img name='broccoli' src={(this.state.broccoliClicks % 2 === 0 ? broccoli_active : broccoli_nonactive)} alt="Broccoli" onClick={this.handleClick}/>
          <img name='cheese' src={(this.state.cheeseClicks % 2 === 0 ? cheese_active : cheese_nonactive)} alt="Cheese" onClick={this.handleClick} />
          <img name='meat' src={(this.state.meatClicks % 2 === 0 ? meat_active : meat_nonactive)} alt="Meat" onClick={this.handleClick} />
          <img name='fish' src={(this.state.fishClicks % 2 === 0 ? fish_active : fish_nonactive)} alt="Fish" onClick={this.handleClick} />
          <img name='chicken' src={(this.state.chickenClicks % 2 === 0 ? chicken_active : chicken_nonactive)} alt="Chicken" onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default HeroOptions
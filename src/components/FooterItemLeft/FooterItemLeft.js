import React, { Component } from "react";
import "./FooterItemLeft.css";
import arrow from '../../images/footer-right-arrow.png'

class FooterItemLeft extends Component {

  render() {
    return (
      <div className="FooterItemLeft-container">
        <div className="FooterItemLeft-title">Running out of products?</div>
        <div className="FooterItemLeft-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <button className="FooterItemLeft-button">
          <p>Buy now</p>
          <img src={arrow} alt=""></img>
        </button>
      </div>
    )
  }
}

export default FooterItemLeft
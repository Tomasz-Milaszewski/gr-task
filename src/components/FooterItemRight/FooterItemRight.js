import React, { Component } from "react";
import "./FooterItemRight.css";
import arrow from '../../images/footer-right-arrow.png'

class FooterItemRight extends Component {

  render() {
    return (
      <div className="FooterItemRight-container">
        <div className="FooterItemRight-title">Frequently Asked Questions</div>
        <div className="FooterItemRight-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <button className="FooterItemRight-button">
          <p>Read FAQs</p>
          <img src={arrow} alt=""></img>
        </button>
      </div>
    )
  }
}

export default FooterItemRight
import React, { Component } from "react";
import "./FooterItemMiddle.css";
import arrow from '../../images/footer-right-arrow.png'
import apple from '../../images/footer-apple-icon.png'
import android from '../../images/footer-android-icon.png'

class FooterItemMiddle extends Component {

  render() {
    return (
      <div className="FooterItemMiddle-container">
        <div className="FooterItemMiddle-title">Bod·ē Trainer in your pocket</div>
        <div className="FooterItemMiddle-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <div className="FooterItemMiddle-button-cont">
          <button className="FooterItemMiddle-button1">
            <img src={apple} alt=""></img>
            <p>iOS</p>
            <img src={arrow} alt=""></img>
          </button>
          <button className="FooterItemMiddle-button2">
            <img src={android} alt=""></img>
            <p>Android</p>
            <img src={arrow} alt=""></img>
          </button>
        </div>
      </div>
    )
  }
}

export default FooterItemMiddle
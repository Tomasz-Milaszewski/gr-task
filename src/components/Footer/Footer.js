import React, { Component } from "react";
import "./Footer.css";
import FooterItemLeft from '../FooterItemLeft/FooterItemLeft'
import FooterItemMiddle from '../FooterItemMiddle/FooterItemMiddle'
// import FooterItemRight from '../FooterItemRight/FooterItemRight'
class Footer extends Component {

  render() {
    return (
      <div className="Footer-container">
        <FooterItemLeft></FooterItemLeft>
        <FooterItemMiddle></FooterItemMiddle>
        {/* <FooterItemRight></FooterItemRight> */}
      </div>
    )
  }
}

export default Footer
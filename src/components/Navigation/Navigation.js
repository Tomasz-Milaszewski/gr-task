import React, { Component } from "react";
import "./Navigation.css";
class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation-container">
                <div className="Navigation-content-container">
                    <div className="Navigation-content-active"><a href="">DASHBOARD<hr /></a></div>
                    <div className="Navigation-content-passive"><a href="">RECIPES<hr /></a></div>
                    <div className="Navigation-content-passive"><a href="">CHALLENGE<hr /></a></div>
                </div>
                <div className="Navigation-user-container">
                    <div className="Navigation-user-image"></div>
                    <div className="Navigation-user-name">Olivia Wilde</div>
                    <div className="Navigation-user-chevron"></div>
                </div>
            </nav>
        )
    }
}

export default Navigation

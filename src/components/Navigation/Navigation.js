import React, { Component } from "react";
import "./Navigation.css";
class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation-container">
                <div className="Navigation-content-container">
                    <div className="Navigation-content-active">DASHBOARD<hr /></div>
                    <div className="Navigation-content-passive">RECIPES<hr /></div>
                    <div className="Navigation-content-passive">CHALLENGE<hr /></div>
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

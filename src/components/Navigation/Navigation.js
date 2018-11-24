import React, { Component } from "react";
import "./Navigation.css";
class Navigation extends Component {

    state = {
        activeViewName: "DASHBOARD"
    }

    handleClick = (event) => {
        event.preventDefault();
        if (event.target.className === "Navigation-content-active") {return; }
        this.setState({activeViewName: event.target.innerText})
    }

    render() {
        return (
            <nav className="Navigation-container">
                <div className="Navigation-content-container">
                    <div className={this.state.activeViewName === "DASHBOARD" ? "Navigation-content-active" : "Navigation-content-passive"}><a href="" onClick={this.handleClick}>DASHBOARD<hr /></a></div>
                    <div className={this.state.activeViewName === "RECIPES" ? "Navigation-content-active" : "Navigation-content-passive"}><a href="" onClick={this.handleClick}>RECIPES<hr /></a></div>
                    <div className={this.state.activeViewName === "CHALLENGE" ? "Navigation-content-active" : "Navigation-content-passive"}><a href="" onClick={this.handleClick}>CHALLENGE<hr /></a></div>
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

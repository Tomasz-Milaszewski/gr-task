import React, { Component } from "react";
import "./DashboardView.css";
import Navigation from '../Navigation/Navigation'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

class DashboardView extends Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <Hero></Hero>
                <Footer></Footer>
            </div>
        )
    }
}
export default DashboardView
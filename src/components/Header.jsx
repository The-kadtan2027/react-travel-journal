import React from "react"
import logo from "../images/logo.png"
const Header = () => {
    return (
        <header class="header">
            <img src={logo} alt="logo" className="logo"/>
            <h4 className="header-title">my travel journal</h4>
        </header>
    )
}

export default Header;
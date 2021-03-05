import React from 'react'
import glassLogo from '../assets/imgs/glass-logo.png'

const Header = () => {
    return (
        <header>
            <div className="logo-wrapper">
                <a href="#" className="logo">
                    Winery
                    <img src={glassLogo} alt=""/>
                    <b>
                        Wine
                    </b>
                </a>
            </div>
            <nav className="nav justify-content-center">
                <a className="nav-link active" href="#">Home</a>
                <a className="nav-link" href="#">Special Wines</a>
                <a className="nav-link" href="#">About Franchise</a>
                <a className="nav-link" href="#">Special Menus</a>
                <a className="nav-link " href="#">Press</a>
                <a className="nav-link " href="#">Account</a>
                <a className="btn btn-dark" href="#">Contact Us</a>
            </nav>
        </header>
    )
}

export default Header;
import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

import './Header.css';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Websites Promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Data Analysis", "Report Generation"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth="true" to="contactme" offset={-95} className="nav-link btn-main-offer header-btn">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header;

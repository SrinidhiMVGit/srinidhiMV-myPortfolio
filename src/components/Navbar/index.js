import React from 'react';
//font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import './NavBar.css';

const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
                <div className="left-nav">
                    <div className="my-name my-name-kannada">
                        <Link smooth="true" to="aboutme" offset={-95}><p >ಶ್ರೀ. ಶ್ರೀನಿಧಿ ಮಧುಗಿರಿ ವೇಣುಗೋಪಾಲ್ </p></Link>
                    </div>
                    <div className="my-name">
                    <Link smooth="true" to="aboutme" offset={-95}><p>Mr. Srinidhi Madhugiri Venugopal</p></Link>
                    </div>
                    <div className="my-profession">
                        <p>Software Developer</p>
                    </div>
                </div>
                <div className="container">
                   
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth="true" className="nav-link" to="home" offset={-120} href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="aboutme" offset={-95} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="services" offset={-95} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link smooth="true" to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link smooth="true" to="contactme" offset={-95} className="nav-link" href="#">Contact Me</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

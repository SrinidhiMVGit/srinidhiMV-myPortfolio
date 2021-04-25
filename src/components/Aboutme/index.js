import React from 'react';
import author from '../../resources/srinidhi_mv.jpg';

import './Aboutme.css';

const Aboutme = () => {
    return (
        <div id="aboutme" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img className="profile-img mb-5" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hello! I have been developing websites for over 6 years. I'm Full Stack Web Developer. I have expertise in technologies like
                        Java & Javascript and databases are MySQL, Oracle, MongoDB. 

                        I create responsive websites that can be displayed in all desktop, laptop and mobile devices. Also
                        I can create Graphs for Data analysis and Visualization. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;

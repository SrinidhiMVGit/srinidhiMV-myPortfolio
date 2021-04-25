import React from 'react';
import { DesktopWindows, Code, BarChart, History } from '@material-ui/icons';

import './Services.css'

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-5">
                            <div className="box">
                                <div className="circle">
                                    <DesktopWindows className="icon" size="large" />
                                </div>
                                <h3>Web Design</h3>
                                <p>I always focus on the project individually and focus on the result.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <Code className="icon" size="large" />
                                </div>
                                <h3>Web Development</h3>
                                <p>End-to-end development will be done using latest technologies</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <BarChart className="icon" size="large" />
                                </div>
                                <h3>Data Analysis</h3>
                                <p>Any data to be analysed will be done thinking in all possible areas</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <History className="icon" size="large" />
                                </div>
                                <h3>Report Generation</h3>
                                <p>Any historical data that will be shown in graphs and will be customized based on needs</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services

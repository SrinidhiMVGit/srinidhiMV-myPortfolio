import React from 'react';

import './Experience.css';

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2015-16</h3>
                        <p>Started my career with Infosys. Trained in Java, Javascript and MYSQL. 
                            Involved in developing Desktop/Web applications using Java. 
                            Also involved in providing required support to the application and users. </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2016-17</h3>
                        <p>Working with Documentum tool(CMS) to manage content/data of the users along with adding new users
                            and removing the same for the tool. Also developed application to download large number
                            of files from CMS to local computer. </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2017-18</h3>
                        <p>Involved in developing web page containing graphs to monitor data usage on weekly/monthly basis
                            using Java and ReactJS. Also help in updating application from out-dated technologies(Java EJB, HTML, CSS, JS)
                            to newest technologies(Java, SpringBoot, ReactJS).  </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2018-19</h3>
                        <p>Involved in training fellow Juniors as and when needed. Developed rich User Interface for the users to interact 
                            and creating backend services to do CRUD operations using Java/NodeJS. 
                            Integrating with databases, external services and API to send/recieve data required for the UI.

                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2019-20</h3>
                        <p>Involed in integrating web application to Cloud environment(AWS, Google Cloud) using Docker, Kubernetes.
                            Also having experience in automating CI/CD operations using Jenkins.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;

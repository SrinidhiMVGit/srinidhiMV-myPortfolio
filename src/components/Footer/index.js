import React from 'react';
import './Footer.css';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p className="city">City : Tumakuru, Karnataka, India</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About Me</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                                <FacebookShareButton
                                    url={"https://www.facebook.com/srinidhi.mv.7/"}
                                    quote={"Full Stack Developer"}
                                    hashtag="#java#javascript"
                                >
                                    <FacebookIcon className="mx-2" size={36} />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url="https://twitter.com/home"
                                    quote={"Full Stack Developer"}
                                    hashtag="#java #javascript"
                                >
                                    <TwitterIcon className="mx-2" size={36} />
                                </TwitterShareButton>
                                <LinkedinShareButton 
                                    url="https://www.linkedin.com/in/srinidhi-mv-39112684/"
                                    quote="Full Stack Developer"
                                    hashtag="java"
                                >
                                    <LinkedinIcon className="mx-2" size={36} />
                                </LinkedinShareButton>
                                <WhatsappShareButton
                                   url="https://www.linkedin.com/in/srinidhi-mv-39112684/"
                                   quote="Full Stack Developer"
                                   hashtag="java">
                                       <WhatsappIcon className="mx-2" size={36} />
                                </WhatsappShareButton>
                                <TelegramShareButton
                                    url="https://www.linkedin.com/in/srinidhi-mv-39112684/"
                                    quote="Full Stack Developer"
                                    hashtag="java">
                                    <TelegramIcon className="mx-2" size={36} />
                                </TelegramShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

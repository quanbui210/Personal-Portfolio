/* eslint-disable no-unused-vars */
import React from "react";

import Form from "./Form";
import "./Contact.scss"

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";





const Contact = () => {
 
    return (
        <section id="contact">
            <div className="contact-detail">
                <h3>Contact Me</h3>
                <p>At the moment, I am looking for Junior positions in Frontend or Full-Stack Development in Finland</p>
                <p>Feel free to contact me through my email: quanbui021001@gmail.com
                    or through my <a href="https://www.linkedin.com/in/quan-bui-0a4908209/">LinkedIn profile</a>
                </p>
                <ul>
                    <li><a href="facebook.com"><FacebookIcon/></a></li>
                    <li><a href="https://www.linkedin.com/in/quan-bui-0a4908209/"><LinkedInIcon/></a></li>
                    <li><a href="mailto:quanbui021001@gmail.com"><EmailIcon/></a></li>
                </ul>
            </div>
            <div className="contact-form">
                <Form/>
            </div>
        </section>
    )
}

export default Contact
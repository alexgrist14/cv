import React, { Component } from 'react';
import Email from '../Assets/email.png';
import GitHub from '../Assets/github-logo.png';
import Telegram from '../Assets/telegram.png';
import Resume from '../Assets/resume-document.png';

export default class Contacts extends Component {
    render() {
        return (
            <div id="contacts" className="contacts">
                <div className="contacts__bg"></div>
                <div className="contacts__content container">
                    <h3>Contacts</h3>
                    <div className="contacts-block contacts-block-primary">
                        <p>I’ll be grateful if you contact with me by the following contacts</p>
                        <div className="contact-icons">
                            <a href="mailto:alexgrist133@gmail.com"> <img src={Email} alt="Email" /></a>
                            <a href="https://t.me/alexgrist" target="_blank" rel="noopener noreferrer"> <img src={Telegram} alt="Telegram" /></a>
                        </div>
                    </div>
                    <div className="contacts-block contacts-block-secondary">
                        <p>My GitHub and resume</p>
                        <div className="contact-icons">
                            <a className="icon" href="https://github.com/alexgrist14" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" /> <h5>GitHub</h5></a>
                            <a className="icon" href="https://docs.google.com/document/d/11ym89-w1vCcFLifwHsft3CCg6BuuxckA6M4brmqCwX0/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={Resume} alt="Resume" /><h5>View resume</h5></a>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
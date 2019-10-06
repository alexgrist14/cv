import React, { Component } from 'react';
import Arrow from '../Assets/arrow.png';
export default class Summary extends Component {
    render() {
        return (
            <>
                <div className="introduction">
                    <div className="introduction-info">
                        Hi <br />
                        I'm Daniil <br />
                        <span className="classification">Front-end</span> web developer <br />
                        <div className="link">
                            scroll down or just <a href="https://docs.google.com/document/d/11ym89-w1vCcFLifwHsft3CCg6BuuxckA6M4brmqCwX0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">view my resume</a>
                        </div>
                    </div>
                </div>
                <div className="arrow"><img src={Arrow} alt="arrow" /></div>
                <div className="about-me">
                    <div className="left-line"></div>
                    <div className="about-me__container">
                        <h2>About me</h2>
                        <p> My name is Daniil Stasulevich. I am novice programmer studying in College. <br />
                            Recently i interested in front-end development.
                            I like JavaScript, React, HTML, CSS. <br />
                            Having programming experience in C#, Unity.</p>

                        <p>Since march 2019 i was studying in Rolling Scopes School courses. <br />
                            Now i would like to became full-stack developer.</p>

                        <p> Also i know how to work with Adobe Photoshop and i worked with it quite enough, <br />
                            and i think that i can do cool things together with JavaScript and Photoshop.</p>
                    </div>
                    <div className="right-line"></div>
                </div>
                <div className="arrow"><img src={Arrow} alt="arrow" /></div>

            </>
        );
    }
}
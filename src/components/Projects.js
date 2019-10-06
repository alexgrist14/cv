import React, { Component } from 'react';
import Slider from "react-slick";
import One from '../Assets/one.png';
import Two from '../Assets/two.png';
import Three from '../Assets/three.png';
import Four from '../Assets/four.png';
import Arrow from '../Assets/arrow.png';

export default class Projects extends Component {
    render() {
        var settings = {
            dots: true,
            speed: 350,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (
            <>
                <div id="projects" className="projects">
                    <div className="projects__bg"></div>
                    <div className="projects__bg-2"></div>
                    <h3>Projects</h3>
                    <Slider {...settings}>
                        <div className="first project">
                            <img src={One} alt="one" />
                            <h3> Piskel clone</h3>
                            <div className="description">
                                <p>Simplified clone of the piskelapp.com, the web-app for spriting and pixel art</p>
                                <p>Environment: React, sass, Canvas API, webpack, eslint</p>
                            </div>
                            <div className="buttons">
                                <a className="button" href="https://kozjar.github.io/Piskel-clone/" target="_blank" rel="noopener noreferrer">Link to App</a>
                                <a className="button" href="https://github.com/Kozjar/Piskel-clone" target="_blank" rel="noopener noreferrer">Link to GitHub</a>
                            </div>
                        </div>
                        <div className="second project">
                            <img src={Two} alt="Two" />
                            <h3> Youtube client</h3>
                            <div className="description">
                                <p>Web app to view the information about youtube clips on user request</p>
                                <p>Environment: core JS, youtube API requests, css animation</p>
                            </div>
                            <div className="buttons">
                                <a className="button" href="https://alexgrist14.github.io/YouTube/" target="_blank" rel="noopener noreferrer">Link to App</a>
                                <a className="button" href="https://github.com/alexgrist14/YouTube" target="_blank" rel="noopener noreferrer">Link to GitHub</a>
                            </div>
                        </div>
                        <div className="third project">
                            <img src={Three} alt="Three" />
                            <h3> Culture portal</h3>
                            <div className="description">
                                <p>Web portal about Belarusian authors, developed in the team</p>
                                <p>Environment: react, typescript, gatsby, contentful CMS, gatsby-plugin-intl (translation into three language)</p>
                            </div>
                            <div className="buttons">
                                <a className="button" href="https://culture-portal-group-9.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link to App</a>
                                <a className="button" href="https://github.com/Shestak2039/National-poets-of-Belarus" target="_blank" rel="noopener noreferrer">Link to GitHub</a>
                            </div>
                        </div>
                        <div className="fourth project">
                            <img src={Four} alt="Four" />
                            <h3>Neutron Mail</h3>
                            <div className="description">
                                <p>Markup website</p>
                                <p>Environment: html, css</p>
                            </div>
                            <div className="buttons">
                                <a className="button" href="https://alexgrist14.github.io/NeutronMail/" target="_blank" rel="noopener noreferrer">Link to App</a>
                                <a className="button" href="https://github.com/alexgrist14/NeutronMail" target="_blank" rel="noopener noreferrer">Link to GitHub</a>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="arrow-pr"><a href="#skills"> <img src={Arrow} alt="arrow" /></a></div>
            </>
        );
    }
}
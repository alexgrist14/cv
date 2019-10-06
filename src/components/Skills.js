import React, { Component } from 'react';
import Html from '../Assets/html-5.png';
import Css from '../Assets/css-3.png';
import JS from '../Assets/javascript.png';
import Sass from '../Assets/sass.png';
import Git from '../Assets/github-logo.png';
import reaction from '../Assets/react.png';
import Node from '../Assets/nodejs.png';
import MatUI from '../Assets/material-ul.png';
import Arrow from '../Assets/arrow.png';

export default class Skills extends Component {
    render() {
        return (
            <div id="skills" className="skills">
                <div className="skills__bg"></div>
                <div className="skills__bg-2"></div>
                <div className="skills__content container">
                    <h3>Skills</h3>
                    <p className="description">This is programming languages, technologies, frameworks, libraries and tools which I used in my practice</p>
                    <div className="skills-block">
                        <div className="skills-block__primary">
                            <div className="skills-block__primary-1">
                                <h4>Programming language and technologies</h4>
                                <div className="prog-languages">
                                    <div className="skill-icons">
                                        <div className="skill-icon">
                                            <img src={Html} alt="html" />
                                            <p>HTML</p>
                                        </div>
                                        <div className="skill-icon">
                                            <img src={Css} alt="css" />
                                            <p>CSS</p>
                                        </div>
                                        <div className="skill-icon">
                                            <img src={JS} alt="js" />
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="skill-icon">
                                            <img src={Sass} alt="sass" />
                                            <p>SASS</p>
                                        </div>
                                        <div className="skill-icon">
                                            <img src={Git} alt="git" />
                                            <p>Git</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skills-block__primary-2">
                                <h4>Frameworks and libraries</h4>
                                <div className="frameworks">
                                    <div className="skill-icons">
                                        <div className="skill-icon">
                                            <img src={reaction} alt="react" />
                                            <p>React</p>
                                        </div>
                                        <div className="skill-icon">
                                            <img src={Node} alt="nodejs" />
                                            <p>Node.js</p>
                                        </div>
                                        <div className="skill-icon">
                                            <img src={MatUI} alt="material ui" />
                                            <p>Material UI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-block__secondary">
                            <p>
                                <span>And other tools:</span> Webpack, Babel, Canvas API, YouTube API, Contentful CMS, Eslint, Pixel perfect, Adobe Photoshop, TypeScript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="arrow"><a href="#contacts"> <img src={Arrow} alt="arrow" /></a></div>
            </div>
        );
    }
}
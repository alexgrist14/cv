import React, { Component } from 'react';

export default class Summary extends Component {
    render() {
        return (
            <div className="introduction">
                Hi <br />
                I'm <span className="name">Daniil</span> <br />
                <span className="classification">Front-end</span> web developer <br />

                scroll down or just <a href="https://docs.google.com/document/d/11ym89-w1vCcFLifwHsft3CCg6BuuxckA6M4brmqCwX0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">view my resume</a>
            </div>
        );
    }
}
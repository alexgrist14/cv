import React, { Component } from 'react';
import Navigation from './Navigation';
import Summary from './Summary';
import Projects from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';
import Footer from './Footer';

export default class Main extends Component {
    render() {
        return (
            <>
                <main>
                    <Navigation />
                    <Summary />
                    <Projects />
                    <Skills />
                    <Contacts />
                </main>
                <Footer />
            </>
        );
    }
}
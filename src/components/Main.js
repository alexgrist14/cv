import React, { Component } from 'react';
import Navigation from './Navigation';
import Summary from './Summary';

export default class Main extends Component {
    render() {
        return (
            <main>
                <Navigation />
                <Summary />
            </main>
        );
    }
}
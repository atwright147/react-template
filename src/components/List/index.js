import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>List</h1>
                <p>A list of things</p>
                <ul>
                    <li>Item 01</li>
                    <li>Item 02</li>
                    <li>Item 03</li>
                </ul>
            </div>
        );
    }
}

export default About;

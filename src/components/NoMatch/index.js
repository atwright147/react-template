import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>404 Page Not Found!</h1>
                <p>Sorry, we were not able to find the page you requested...</p>
            </div>
        );
    }
}

export default Home;

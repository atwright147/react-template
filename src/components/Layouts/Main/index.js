import React, { Component } from 'react';
import { Link } from 'react-router';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/user-form">User Form</Link>
                        <Link to="/address-form">Address Form</Link>
                        <Link to="/filtered-select-form">Filtered Select Form</Link>
                        <Link to="/another-view">Another View</Link>
                        <Link to="/does-not-exist">A view that doesn&rsquo;t exist</Link>
                    </nav>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        );
    }
}

export default MainLayout;

import React, { Component } from 'react';
import { Link } from 'react-router';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link to="/">Home</Link><br />
                        <Link to="/user-form">User Form</Link><br />
                        <Link to="/address-form">Address Form</Link><br />
                        <Link to="/another-view">Another View</Link><br />
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

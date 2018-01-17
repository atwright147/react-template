import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>List</h1>
                <p>A list of things</p>
                <ul>
                { this.props.items && this.props.items.length && this.props.items.map(item =>
                    <li key={item.id}>{item.content}</li>
                )}
                </ul>
            </div>
        );
    }
}

export default List;

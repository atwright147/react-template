import React, { Component } from 'react';
import axios from 'axios';

import List from './List.js';

class ListContainer extends Component {
    constructor() {
        super();
        this.state = { list: {} };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8882/api/lists/1')
            .then((res) => {
                this.setState({
                    'list': res.data
                });
            })
            .catch((err) => {
                console.error(err);  // eslint-disable-line no-console
            })
    }

    render() {
        return <List items={this.state.list} />
    }
}

export default ListContainer;

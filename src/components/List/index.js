import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form';

class FormContainer extends Component {
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
        return <Form formData={this.state.formData} />
    }
}

export default FormContainer;

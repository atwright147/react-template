import React from 'react';
import { Control, Form } from 'react-redux-form';

class UserForm extends React.Component {
    render() {
        return (
            <Form model="user">
                <label htmlFor="user.firstName">First name:</label>
                <Control.text model="user.firstName" id="user.firstName" />

                <label htmlFor="user.lastName">Last name:</label>
                <Control.text model="user.lastName" id="user.lastName" />

                <button type="submit">Finish registration!</button>
            </Form>
        );
    }
}

export default UserForm;

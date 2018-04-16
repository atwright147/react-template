import React from 'react';
import { Control, Form } from 'react-redux-form';

class UserForm extends React.Component {
    render() {
        return (
            <Form model="dynamic">
                <label htmlFor=".firstName">First name:</label>
                <Control.text model=".firstName" id=".firstName" />

                <label htmlFor=".lastName">Last name:</label>
                <Control.text model=".lastName" id=".lastName" />

                <button type="submit">Save User</button>
            </Form>
        );
    }
}

export default UserForm;

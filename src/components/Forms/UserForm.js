import React from 'react';
import { Control, Form } from 'react-redux-form';

const UserForm = () => (
    <Form model="dynamic">
        <h1>User Form</h1>

        <label htmlFor=".firstName">First name:</label>
        <Control.text model=".firstName" id=".firstName" /><br />

        <label htmlFor=".lastName">Last name:</label>
        <Control.text model=".lastName" id=".lastName" /><br />

        <button type="submit">Save User</button>
    </Form>
);

export default UserForm;

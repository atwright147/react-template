import React from 'react';
import { Control, Form } from 'react-redux-form';

class AddressForm extends React.Component {
    render() {
        return (
            <Form model="dynamic">
                <h1>Address Form</h1>

                <label htmlFor=".address1">Address 1:</label>
                <Control.text model=".address1" id=".address1" /><br />

                <label htmlFor=".address2">Address 2:</label>
                <Control.text model=".address2" id=".address2" /><br />

                <label htmlFor=".city">City:</label>
                <Control.text model=".city" id=".city" /><br />

                <label htmlFor=".county">County:</label>
                <Control.text model=".county" id=".county" /><br />

                <label htmlFor=".postCode">Post Code:</label>
                <Control.text model=".postCode" id=".postCode" /><br />

                <button type="submit">Save Address</button>
            </Form>
        );
    }
}

export default AddressForm;

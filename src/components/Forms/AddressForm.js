import React from 'react';
import { Control, Form } from 'react-redux-form';

class AddressForm extends React.Component {
    render() {
        return (
            <Form model="address">
                <label htmlFor="address.address1">Address 1:</label>
                <Control.text model="address.address1" id="address.address1" />

                <label htmlFor="address.address2">Address 2:</label>
                <Control.text model="address.address2" id="address.address2" />

                <label htmlFor="address.city">City:</label>
                <Control.text model="address.city" id="address.city" />

                <label htmlFor="address.county">County:</label>
                <Control.text model="address.county" id="address.county" />

                <label htmlFor="address.postCode">Post Code:</label>
                <Control.text model="address.postCode" id="address.postCode" />

                <button type="submit">Finish registration!</button>
            </Form>
        );
    }
}

export default AddressForm;

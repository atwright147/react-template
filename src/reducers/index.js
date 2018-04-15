import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import listItems from './listItemsReducer';

const initialUserState = {
    username: '',
    lastname: '',
}
const initialAddressState = {
    address1: '',
    address2: '',
    city: '',
    county: '',
    postCode: '',
}

const rootReducer = combineReducers({
    listItems,
    ...createForms({
        user: initialUserState,
        address: initialAddressState,
    }),
});

export default rootReducer;

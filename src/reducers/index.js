import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import listItems from './listItemsReducer';

const initialUserState = {
    username: '',
    password: '',
}

const rootReducer = combineReducers({
    listItems,
    ...createForms({
        user: initialUserState,
    }),
});

export default rootReducer;

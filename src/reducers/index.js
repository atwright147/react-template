import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { createForms } from 'react-redux-form';
import listItems from './listItemsReducer';

const initialUserState = {
    username: 'John',
    password: '',
}

const rootReducer = combineReducers({
    routerReducer,
    listItems,
    ...createForms({
        user: initialUserState,
    }),
});

export default rootReducer;

import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import listItems from './listItemsReducer';

export const rootReducer = combineReducers({
    listItems,
    ...createForms({
        dynamic: {},
    }),
});

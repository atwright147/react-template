import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import { reducer as listItems } from './listItemsReducer';

export const rootReducer = combineReducers({
    listItems,
    ...createForms({
        dynamic: {},
    }),
});

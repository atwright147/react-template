import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import { reducer as listItemsReducer } from './listItemsReducer';

export const rootReducer = combineReducers({
    listItemsReducer,
    ...createForms({
        dynamic: {},
    }),
});

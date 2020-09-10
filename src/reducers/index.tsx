import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import listItems from './listItemsReducer';

const rootReducer = combineReducers({
    listItems,
    ...createForms({
        dynamic: {},
    }),
});

export default rootReducer;

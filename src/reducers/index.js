import { combineReducers } from 'redux';

import listItems from './listItemsReducer';

const rootReducer = combineReducers({
    listItems,
});

export default rootReducer;

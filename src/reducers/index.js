import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import listItems from './listItemsReducer';

const rootReducer = combineReducers({
    routerReducer,
    listItems,
});

export default rootReducer;

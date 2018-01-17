import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import List from './components/List';
import configureStore from './store/configureStore';
import * as listActions from './actions/listActions';

import './styles/base.scss'

const initialState = {
    listItems: [],
}

const store = configureStore(initialState);

const items = [
    {
        id: 1,
        content: 'Item 01'
    },
    {
        id: 2,
        content: 'Item 02'
    },
    {
        id: 3,
        content: 'Item 03'
    },
]

// initialise
store.dispatch(listActions.updateListItems(items));

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root')
);

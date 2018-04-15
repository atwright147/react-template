import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/base.scss';

import List from './components/List';
import UserForm from './components/Forms/UserForm';
import configureStore from './store/configureStore';
import * as listActions from './actions/listActions';

const initialState = {
    listItems: [],
}

const store = configureStore(initialState);

// initialise
store.dispatch(listActions.updateListItems());

ReactDOM.render(
    <Provider store={store}>
        <UserForm />
    </Provider>,
    document.getElementById('root')
);

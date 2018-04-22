import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './styles/base.css';

import MainLayout from './components/Layouts/Main';
import Home from './components/Home';
import List from './components/List';
import UserForm from './components/Forms/UserForm';
import AddressForm from './components/Forms/AddressForm';
import AnotherView from './components/AnotherView';
import NoMatch from './components/NoMatch';

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
        <Router history={ browserHistory }>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Home} />
                <Route path="list" component={List} />
                <Route path="user-form" component={UserForm} />
                <Route path="address-form" component={AddressForm} />
                <Route path="another-view" component={AnotherView} />
                <Route path="*" component={NoMatch} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

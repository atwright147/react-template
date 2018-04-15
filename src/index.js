import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import './styles/base.scss';

import Home from './components/Home';
import List from './components/List';
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
            <Route path="/" component={Home} />
            <Route path="list" component={List} />
            <Route path="another-view" component={AnotherView} />
            <Route path="*" component={NoMatch} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

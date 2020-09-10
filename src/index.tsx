import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/base.css';

import MainLayout from './components/Layouts/Main';

import { configStore } from './store/configStore';
import * as listActions from './actions/listActions';

const initialState = {
    listItems: [],
}

const store = configStore(initialState);

// initialise
store.dispatch(listActions.updateListItems());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={MainLayout} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

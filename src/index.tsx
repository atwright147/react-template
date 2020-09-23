import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/base.css';

import MainLayout from './components/Layouts/Main';

import { configStore } from './store/configStore';

export interface AppState {
    listItems: [];
}

const initialState: AppState = {
    listItems: [],
}

const store = configStore(initialState);

ReactDOM.render(
    // <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={MainLayout} />
                </Switch>
            </BrowserRouter>
        </Provider>,
    // </StrictMode>,
    document.getElementById('root'),
);

import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { AppState } from '../index';
import { rootReducer } from '../reducers';

const middleware = [thunk];

export const configStore = (initialState): Store => (
    createStore<AppState>(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware),
            // other store enhancers if any
        )
    )
);

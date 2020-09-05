import axios from 'axios';
import { push } from 'react-router-redux';

import _store from '../../store';

const handleRequest = (response, store = _store) => {
    store.dispatch({ type: 'spinner/ADD' });
    return Promise.resolve(response);
};

const handleRequestError = (error, store = _store) => {
    store.dispatch({ type: 'spinner/REMOVE' });
    return Promise.reject(error);
};

const handleResponse = (response, store = _store) => {
    store.dispatch({ type: 'spinner/REMOVE' });
    return Promise.resolve(response);
};

const handleResponseError = (error, store = _store) => {
    store.dispatch({ type: 'spinner/REMOVE' });

    let status = false;
    if (error && error.response && error.response.status) {
        ({ status } = error.response);
    }

    switch (status) {
        case 401:
            store.dispatch(push('/login'));
            break;

        case 404:
            store.dispatch(push('/error/404'));
            break;

        default:
            break;
    }

    return Promise.reject(error);
};

const axiosInstance = axios.create({
    withCredentials: true,
    timeout: 5000,
});

axiosInstance.interceptors.request.use(handleRequest, handleRequestError);
axiosInstance.interceptors.response.use(handleResponse, handleResponseError);

export { axiosInstance as default, handleRequest, handleRequestError, handleResponse, handleResponseError };

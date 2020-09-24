import axios, { ResponseType, AxiosError } from 'axios';
import { push } from 'react-router-redux';

import { configStore } from '../../store/configStore';

/* eslint-disable @typescript-eslint/no-explicit-any */

const handleRequest = (response: ResponseType, store = configStore): Promise<ResponseType> => {
    (store as any).dispatch({ type: 'spinner/ADD' });
    return Promise.resolve(response);
};

const handleRequestError = (error: AxiosError<any>, store = configStore): Promise<never> => {
    (store as any).dispatch({ type: 'spinner/REMOVE' });
    return Promise.reject(error);
};

const handleResponse = (response: ResponseType, store = configStore): Promise<ResponseType> => {
    (store as any).dispatch({ type: 'spinner/REMOVE' });
    return Promise.resolve(response);
};

const handleResponseError = (error: AxiosError<any>, store = configStore): Promise<never> => {
    (store as any).dispatch({ type: 'spinner/REMOVE' });

    let status: boolean | number = false;
    if (error && error.response && error.response.status) {
        ({ status } = error.response);
    }

    switch (status) {
        case 401:
            (store as any).dispatch(push('/login'));
            break;

        case 404:
            (store as any).dispatch(push('/error/404'));
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

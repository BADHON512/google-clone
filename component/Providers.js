"use client"
import { store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Provider } from 'react-redux';
import {ToastContainer}from "react-toastify"

const Providers = ({children}) => {
    return (
        <Provider store={store}>
            <SessionProvider session={children.session}>
            <ToastContainer position='top-center' limit={1}/>
            {children}
            </SessionProvider>
        </Provider>
    );
};

export default Providers;
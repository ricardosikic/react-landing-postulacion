import React, { Fragment } from 'react';
import { Login } from '../components/login/Login';

export const LoginPage = () => {
    return(
        <Fragment>
            <h2>Hola, Registrate</h2>
            <Login />
        </Fragment>
    );
}
import React, { Fragment } from 'react';
import { Context } from '../../store/TheContext';

export const Login = () => {
    
    return(
        <Fragment>
            <Context.Consumer>
                { actions => {
                    return(
                        <form onSubmit={e => actions.submitLogin(e)}>
                            <input type="text" onChange={e => actions.fetchData(e)} name="username" placeholder="username"></input>
                            <input type="password" onChange={e => actions.fetchData(e)} name="password" placeholder="password"></input>
                            <button type="submit">Log in</button>
                        </form> 
                    )
                }}
            </Context.Consumer>
        </Fragment>
    )
}
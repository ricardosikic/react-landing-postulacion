import React from 'react';
import { Redirect } from 'react-router-dom';

export const Context = React.createContext();

export class TheProvider extends React.Component {
    
    // initial obj state, this obj has store and actions (methods)
    state = {
        // login data and token
        loginData: {},
        token: '',
        isLogin: false      
    }

    // login actions
    fetchData = (e) => {
        const { name, value } = e.target;
        const data = { [name]: value };
        const newData = { ...this.state.loginData, ...data }
        this.setState({
            loginData: newData
        })
    }

    submitLogin = (e) => {
        e.preventDefault(e);
        let url = 'http://127.0.0.1:8000/api/rest-auth/login/';
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state.loginData),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(resp => {
            console.log(resp.status);
            return resp.json();
        })
        .then(data => {
            console.log('recibo mi token', data.key);
            localStorage.setItem('key', data.key);
            this.setState({
                token: this.state.token.concat(data.key),
                isLogin: true
            })
        })
    }

    // logout actions
    logout = (e) => {
        e.preventDefault();
        console.log('salida');
        localStorage.removeItem('key');
    }
  
    
    render(){
        const myContext = {
            ...this.state,
            fetchData: this.fetchData,
            submitLogin: this.submitLogin,
            logout: this.logout
        }

        return(
            <Context.Provider value={myContext}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
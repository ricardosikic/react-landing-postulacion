import React, { Fragment } from 'react';

export class CreatePost extends React.Component {
    
    state = {
        newPost: []
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let newObj = { [name]: value };
        const newData = {...this.state.newPost, ...newObj};
        this.setState({
            newPost: newData
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('posted ', this.state.newPost);
        const secretKey = localStorage.getItem('key');
        let url = 'http://127.0.0.1:8000/api/';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state.newPost),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            console.log('respuesta de la subida ', resp.status);
            return resp.text();
        })
    }
   


    render() {
        return(
            <Fragment>
                <h1>Create page</h1>
                <form>
                    <input name='title' placeholder='title' onChange={e => this.handleChange(e)}></input>
                    <input name='description' placeholder='description' onChange={e => this.handleChange(e)}></input>
                    <input name='content' placeholder='content' onChange={e => this.handleChange(e)}></input>
                    <input name='category' placeholder='category' onChange={e => this.handleChange(e)}></input>
                    <button onClick={e => this.handleSubmit(e)}>Crea</button>
                </form>
            </Fragment>
        )
    }
}
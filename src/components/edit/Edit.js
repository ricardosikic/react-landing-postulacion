import React, { Fragment } from 'react';

export class EditPost extends React.Component {

    state = {
        post: {},
        edited: {}
    }
 
    componentDidMount() {
        this.getSinglePost(this.props.match.params.id);
    }
 
    getSinglePost = (id) => {
        const secretKey = localStorage.getItem('key');
        fetch('http://127.0.0.1:8000/api/' + id + '/', {
            method: 'GET',
            headers: {
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            console.log('status de la peticion de edicion ', resp.status);
            return resp.json();
        })
        .then(data => {
            console.log('recibiendo la data de edicion', data);
            let singleData = data;
            this.setState({
                post: singleData
            })
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let editedObj = { [name]: value };
        const newData = {...this.state.edited, ...editedObj};
        this.setState({
            edited: newData
        })

    }

    handleEdit = (e, id) => {
        e.preventDefault();
        console.log('http://127.0.0.1:8000/api/' + id + '/');
        const secretKey = localStorage.getItem('key');
        fetch('http://127.0.0.1:8000/api/' + id + '/', {
            method: 'PUT',
            body: JSON.stringify(this.state.edited),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            console.log('status de la peticion de edicion ', resp.status);
            return resp.json();
        })
        
    }

    render() {
        return(
            <Fragment>
                <h1>hello edittt</h1>
                <form>
                    <input defaultValue={this.state.post.title} name='title' onChange={e => this.handleChange(e)}></input>
                    <input defaultValue={this.state.post.author} name='author' onChange={e => this.handleChange(e)}></input>
                    <input defaultValue={this.state.post.content} name='content' onChange={e => this.handleChange(e)}></input>
                    <input defaultValue={this.state.post.url} name='url' onChange={e => this.handleChange(e)}></input>
                    <button onClick={e => this.handleEdit(e, this.state.post.id)}>Editar</button>
                </form>
            </Fragment>
        )
    }
}
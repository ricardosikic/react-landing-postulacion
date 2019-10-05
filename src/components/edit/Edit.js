import React, { Fragment } from 'react';
import { EditView } from '../../views/admin/Edit';

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
                {/* paso por props info que quiere consumir el hijo en la vista. */}
                <EditView editInfo={this.state.post} editClick={this.handleEdit} change={this.handleChange}/>
            </Fragment>
        )
    }
}
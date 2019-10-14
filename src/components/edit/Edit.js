import React, { Fragment } from 'react';
import { EditView } from '../../views/admin/Edit';
import axios from 'axios';

export class EditPost extends React.Component {

    state = {
        post: {},
        categorias: [],
        edited: {},
        title: '',
        description: '',
        content: '',
        category: '',
        selectedFile: null
    }
 
    componentDidMount() {
        this.getSinglePost(this.props.match.params.id);
        this.getCategories();
    }

    getCategories = () => {
        console.log('categoriasss');
        let url = 'http://127.0.0.1:8000/api/categories/';
        const secretKey = localStorage.getItem('key')

        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            console.log('recibe la info para categorias', resp.status);
            return resp.json();
        })
        .then(info => {
            console.log('recibe las categorias', info);
            this.setState({
                categorias: this.state.categorias.concat(info)
            })
        })
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

    handleTitle = (e) => {
        this.setState({
            title: e.target
        })
    }

    handleDescription = (e) => {
        this.setState({
            description: e.target
        })
    }

    handleContent = (e) => {
        this.setState({
            content: e.target
        })
    }


    handleImage = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    handleCategory = (e) => {
        this.setState({
            category: e.target
        })
    }
    
    // el evento click dispara la funcion handleEdit que envia como parametro el id del post
    handleEdit = (e, id) => {
        console.log('title', this.state.title)
        e.preventDefault();


        let formData = new FormData();
        formData.append('photo', this.state.selectedFile)
        formData.append('title', this.state.title.value)
        formData.append('description', this.state.description.value)
        formData.append('content', this.state.content.value)
        formData.append('category', this.state.category.value)

        const secretKey = localStorage.getItem('key');
        let url = 'http://127.0.0.1:8000/api/' + id + '/';
        axios.put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            console.log('respuesta de la edicion', resp.status);
        })
    }

    // handleChange = (e) => {
    //     const { name, value } = e.target;
    //     let editedObj = { [name]: value };
    //     const newData = {...this.state.edited, ...editedObj};
    //     this.setState({
    //         edited: newData
    //     })

    // }

    // handleEdit = (e, id) => {
    //     e.preventDefault();
    //     console.log('http://127.0.0.1:8000/api/' + id + '/');
    //     const secretKey = localStorage.getItem('key');
    //     fetch('http://127.0.0.1:8000/api/' + id + '/', {
    //         method: 'PUT',
    //         body: JSON.stringify(this.state.edited),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `token ${secretKey}`
    //         }
    //     })
    //     .then(resp => {
    //         console.log('status de la peticion de edicion ', resp.status);
    //         return resp.json();
    //     })
        
    // }

    render() {
        
        const cat = this.state.categorias.map((categoria, id) => {
            return(
                <option key={id} value={categoria.id}>{categoria.category_name}</option>
            )
        })

        return(
            <Fragment>
                {/* paso por props info que quiere consumir el hijo en la vista. */}
                <form>
                    <h1>hi</h1>
                    <img src={this.state.post.photo}></img>
                    <input type='file' onChange={e => this.handleImage(e)}></input>
                    <input name='title' defaultValue={this.state.post.title} placeholder='title' onChange={e => this.handleTitle(e)}></input>
                    <input type='description' defaultValue={this.state.post.description} placeholder='description' onChange={e => this.handleDescription(e)}></input>
                    <input type='content' defaultValue={this.state.post.content} placeholder='content' onChange={e => this.handleContent(e)}></input>
                    <select name='category' onChange={e => this.handleCategory(e)}>{cat}</select>
                    <button onClick={e => this.handleEdit(e, this.state.post.id)}>guardar</button>
                </form>
                {/* <EditView editInfo={this.state.post} editClick={this.handleEdit} change={this.handleChange}/> */}
            </Fragment>
        )
    }
}
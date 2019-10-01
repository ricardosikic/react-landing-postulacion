import React, { Fragment } from 'react';
import axios from 'axios';


export class CreatePost extends React.Component {
    
    state = {
        title: '',
        description: '',
        selectedFile: null
    }

    // componentDidMount() {
    //     this.getCategories();
    // }

    // getCategories = () => {
    //     console.log('categoriasss');
    //     let url = 'http://127.0.0.1:8000/api/';
    //     const secretKey = localStorage.getItem('key')

    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             Authorization: `token ${secretKey}`
    //         }
    //     })
    //     .then(resp => {
    //         console.log('recibe la info para categorias', resp.status);
    //         return resp.json();
    //     })
    //     .then(info => {
    //         console.log('recibe las categorias', info);
    //         this.setState({
    //             categorias: this.state.categorias.concat(info)
    //         })
    //     })
    // }

    handleImage = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('posted ', this.state.selectedFile);
        let formData = new FormData();
        formData.append('photo', this.state.selectedFile)
        formData.append('title', this.state.title.value)
        formData.append('description', this.state.description.value)
        formData.append('content', this.state.content.value)
        
        
        const secretKey = localStorage.getItem('key');
        let url = 'http://127.0.0.1:8000/api/';
        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            console.log(resp.status);
        })
    }



    render() {
        return(
            <Fragment>
                <h1>Create page</h1>
                <form>
                    <input name='title' placeholder='title' onChange={e => this.handleTitle(e)}></input>
                    <input name='description' placeholder='description' onChange={e => this.handleDescription(e)}></input>
                    <input name='content' placeholder='content' onChange={e => this.handleContent(e)}></input>
                    {/* <input name='category' placeholder='category' onChange={e => this.handleChange(e)}></input> */}
                    <input name='photo' type="file" onChange={e => this.handleImage(e)}/>
                    <button onClick={e => this.handleSubmit(e)}>Crea</button>
                </form>
            </Fragment>
        )
    }
}
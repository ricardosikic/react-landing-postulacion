import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export class PostList extends React.Component {

    state = {
      posts: [],
      token: ''
    }

    componentDidMount() {
        const secretKey = localStorage.getItem('key');
        this.setState({
            token: this.state.token.concat(secretKey)
        })

        let url = 'http://127.0.0.1:8000/api/';
        fetch(url, {
            method: 'GET',
            headers: {
                // token de authorizacin en los headers
                Authorization: `token ${secretKey}`
            }
        })

        .then(resp => {
            console.log('la respuesta de la peticion es ', resp.status);
            return resp.json();
        })
        .then(data => {
            console.log('leyendo ', data);
            this.setState({
                posts: this.state.posts.concat(data)
            })
        })
    }

    render() {
        const titles = this.state.posts.map((post, id) => {
            return(
              
             <ul key={id}>
                <li><Link to={'/single/' + post.id}>{post.title}</Link></li>
             </ul>
            )
        })
        return(
            <Fragment>
                {titles}
            </Fragment>
        )
    }
}


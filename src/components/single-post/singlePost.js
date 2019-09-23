import React, { Fragment } from 'react';

export class SinglePost extends React.Component {

   state = {
       post: {}
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
           console.log('status de la peticion ', resp.status);
           return resp.json();
       })
       .then(data => {
           console.log('recibiendo la data ', data);
           let singleData = data;
           this.setState({
               post: singleData
           })
       })
   }

    render() {
        console.log('que recibe?', this.state.post)
        return(
            <Fragment>
                <h1>Single post</h1>
                <h2>{this.state.post.title}</h2>
            </Fragment>
        )
    }
}
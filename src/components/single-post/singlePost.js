import React, { Fragment } from 'react';
import { SinglePage } from '../../views/SinglePost';

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
        console.log('que recibe y pasa a post info?', this.state.post)
        return(
            <Fragment>
                {/* paso la data proveniente de la api por props */}
                <SinglePage postInfo={this.state.post}/>
            </Fragment>
        )
    }
}
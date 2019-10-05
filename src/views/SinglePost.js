import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTE FUNCIONAL, HIJO DEL SINGLE POST  
export const SinglePage = ({postInfo}) => {
    console.log('datos x props', postInfo)
    console.log('ruta img ', postInfo.photo);
    return(
        <Fragment>
            <img src={postInfo.photo}></img>
            <h2>{postInfo.title}</h2>
            <p>{postInfo.content}</p>

            <button><Link to={'/admin/edit/single/' + postInfo.id}>Editar</Link></button>
        </Fragment>
        
    )
}
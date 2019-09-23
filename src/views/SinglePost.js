import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTE FUNCIONAL, HIJO DEL SINGLE POST  
export const SinglePage = ({postInfo}) => {
    console.log('datos x props', postInfo)
    return(
        <Fragment>
            <h2>{postInfo.title}</h2>
            <p>{postInfo.content}</p>
            <button><Link to={'/edit/single/' + postInfo.id}>Editar</Link></button>
        </Fragment>
        
    )
}
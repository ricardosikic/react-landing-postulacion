import React, { Fragment } from 'react';


// this child component is renderer through the father component

export const EditView = ({ editInfo, editClick, change }) => {
    console.log('estaran las categorias?', editInfo.category);
    return(
        <Fragment>
            <h2>edit view</h2>
            <form>
                <input defaultValue={editInfo.title} name='title' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.author} name='author' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.content} name='content' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.url} name='url' onChange={e => change(e)}></input>
                <select></select>
                <button onClick={e => editClick(e, editInfo.id)}>Editar</button>
            </form>
        </Fragment>
    )
}
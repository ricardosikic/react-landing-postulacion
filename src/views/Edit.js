import React, { Fragment } from 'react';


export const Edit = ({editInfo, editClick, change}) => {
    return(
        <Fragment>
            <h2>edit view</h2>
            <form>
                <input defaultValue={editInfo.title} name='title' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.author} name='author' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.content} name='content' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.url} name='url' onChange={e => change(e)}></input>
                <button onClick={e => editClick(e, editInfo.id)}>Editar</button>
            </form>
        </Fragment>
    )
}
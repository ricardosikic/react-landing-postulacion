import React, { Fragment } from 'react';


// this child component is renderer through the father component

export const EditView = ({ editInfo, editClick, change }) => {

    return(
        <Fragment>
            <h2>edit view</h2>
            <form>
                <img src={editInfo.photo}></img>
                <input defaultValue={editInfo.title} name='title' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.content} name='content' placeholder='contenido' onChange={e => change(e)}></input>
                <input defaultValue={editInfo.url} name='url' placeholder='url' onChange={e => change(e)}></input>
                {/* <input name='photo' type="file" onChange={e => this.handleImage(e)}/> */}
                <button onClick={e => editClick(e, editInfo.id)}>Editar</button>
            </form>
        </Fragment>
    )
}
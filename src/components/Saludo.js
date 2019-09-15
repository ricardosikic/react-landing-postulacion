import React from 'react';

import { Context } from '../store/TheContext.js';

export const Saludo = () =>  {
    return(
        <Context.Consumer>
            {value => {
                return(
                    <p>Saludo desde {value.salud}</p>
                )
            }}
        </Context.Consumer>
    );
}
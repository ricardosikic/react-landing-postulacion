import React from 'react';

export const Context = React.createContext();

export class TheProvider extends React.Component {
    
    // initial obj state
    state = {
        store: {
            salud: 'el context'
        },

        actions: {

        }
    }
    

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
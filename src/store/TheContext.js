import React from 'react';

export const Context = React.createContext();

export class TheProvider extends React.Component {
    
    // initial obj state, this obj has store and actions (methods)
    state = {
        
        salud: [] 

    }

    // componentDidMount() {
    //     this.getInf();
    // }


    // getInf() {
    //     fetch('http://127.0.0.1:8000/api')
    //     .then(resp => {
    //         console.log(resp.ok);
    //         return resp.json();
    //     })
    //     .then(data => {
    //         console.log('llego la data ', data);
    //         this.setStore
    //     })
    // }

    
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
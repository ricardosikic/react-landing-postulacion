import React, { Fragment } from 'react';
import { TheProvider } from './store/TheContext';
import { Saludo } from './components/Saludo';
import './App.css';

export class App extends React.Component {

  // initial obj state

  state = {}

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/')
    .then(resp => {
        console.log(resp.ok);
        return resp.json();
    })
    .then(data => {
        console.log('llego la data ', data);
    })
  }

  render() {
    return (
      <TheProvider>
        <Fragment>
          <Saludo />
        </Fragment>
      </TheProvider>
    );
  }
}

export default App;

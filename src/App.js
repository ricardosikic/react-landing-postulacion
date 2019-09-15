import React, { Fragment } from 'react';
import { TheProvider } from './store/TheContext';
import { Saludo } from './components/Saludo';
import './App.css';

export class App extends React.Component {

  // initial obj state

  state = {}

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

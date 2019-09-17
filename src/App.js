import React , { Fragment } from 'react';
import { Nav } from './components/nav/Nav';
import { Main } from './components/main/Main';
import { TheProvider } from './store/TheContext';

export class App extends React.Component {

  // initial obj state

  state = {}


  render() {
    return (
        <Fragment>
          <TheProvider>
           <Nav />
           <Main />
          </TheProvider>
        </Fragment>
    );
  }
}

export default App;

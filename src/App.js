import React , { Fragment } from 'react';
import { Login } from './components/login/Login';
import { PostList } from './components/post-list/postList';
import { TheProvider } from './store/TheContext';

export class App extends React.Component {

  // initial obj state

  state = {}


  render() {
    return (
        <Fragment>
          <TheProvider>
           <Login />
           <PostList />
          </TheProvider>
        </Fragment>
    );
  }
}

export default App;

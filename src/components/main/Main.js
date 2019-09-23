import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../views/Home';
import { Posts } from '../../views/PostPage';
import { SinglePost } from '../single-post/singlePost';
import { LoginPage } from '../../views/LoginPage';

export const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/posts' component={Posts}></Route>
            <Route path='/single/:id' component={SinglePost}></Route>
            <Route path='/login' component={LoginPage}></Route>
        </Switch>
    )
}
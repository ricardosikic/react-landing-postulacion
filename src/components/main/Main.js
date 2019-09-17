import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../views/Home';
import { PostList } from '../post-list/postList';
import { LoginPage } from '../../views/LoginPage';

export const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/posts' component={PostList}></Route>
            <Route path='/login' component={LoginPage}></Route>
        </Switch>
    )
}
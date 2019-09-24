import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../views/Home';
import { Posts } from '../../views/PostPage';
import { SinglePost } from '../single-post/singlePost';
import { EditPost } from '../edit/Edit';
import { LoginPage } from '../../views/LoginPage';
import { CreatePost } from '../create/Create';

export const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/posts' component={Posts}></Route>
            <Route path='/create' component={CreatePost}></Route>
            <Route path='/single/:id' component={SinglePost}></Route>
            <Route path='/edit/single/:id' component={EditPost}></Route>
            <Route path='/login' component={LoginPage}></Route>
        </Switch>
    )
}
import React, { Fragment } from 'react';
import { PostList } from '../components/post-list/postList';

export const Posts = () => {
    return(
        <Fragment>
            <h3>Posts</h3>
            <PostList />
        </Fragment>
    )
}
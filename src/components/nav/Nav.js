import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/TheContext';

export const Nav = () => {
    return(
        <Context.Consumer>
          { actions => {
              return(
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/posts'>Posts</Link></li>
                        {actions.isLogin ? (
                            <li><Link to='/logout' onClick={e => actions.logout(e)}>Log out</Link></li>
                         ):(
                            <li><Link to='/login'>Log in</Link></li>
                         )
                        }
                    </ul>
                </nav>
              )
          }}
        </Context.Consumer>
    )
}
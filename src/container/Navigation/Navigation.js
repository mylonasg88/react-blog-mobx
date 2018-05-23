//@flow
import React from 'react';
import { observer, inject } from 'mobx-react';
import './Navigation.css'

import { NavLink } from 'react-router-dom'

export default inject('blogStore')(observer((props) => {
    const { blogStore } = props;
    console.log(blogStore.isLoggedIn + 'is logged in');
    return (
        <div className="navigation">
            {blogStore.isLoggedIn ? (
                <ul>
                    <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                    <li><NavLink exact to="/posts" activeClassName="selected">All Posts</NavLink></li>
                    <li><NavLink exact to='/post/new' activeClassName="selected">New Post</NavLink></li>
                </ul>) :
                (
                    <h3><NavLink exact to="/login">Please Log in</NavLink></h3>
                )
            }
        </div>
    )
}));

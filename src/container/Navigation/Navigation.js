//@flow
import React from 'react';
import { observer, inject } from 'mobx-react';
import './Navigation.css'

import { NavLink } from 'react-router-dom'

export default inject('blogStore')(observer((props) => {
    const { blogStore } = props;
    
    return (
        <div className="navigation">
            {blogStore.isLoggedIn ? (
                <ul>
                    <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                    <li><NavLink exact to="/posts" activeClassName="selected">All Posts</NavLink></li>
                    <li><NavLink exact to='/post/new' activeClassName="selected">New Post</NavLink></li>
                    <li><NavLink exact to='/post/234234234' activeClassName="selected">Post Info</NavLink></li>
                </ul>) :
                (
                    <h3><NavLink exact to="/login">Please Log in</NavLink></h3>
                )
            }
        </div>
    )
}));

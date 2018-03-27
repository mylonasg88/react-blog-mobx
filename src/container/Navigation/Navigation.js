//@flow
import React from 'react'
import './Navigation.css'

import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                <li><NavLink to="/posts" activeClassName="selected">All Posts</NavLink></li>
                <li><NavLink to='/post/new' activeClassName="selected">New Post</NavLink></li>
            </ul>
        </div>
    )
}

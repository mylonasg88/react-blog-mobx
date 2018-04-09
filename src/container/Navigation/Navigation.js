//@flow
import React from 'react'
import './Navigation.css'

import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <div className="navigation">
            <ul>
                <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                <li><NavLink exact to="/posts" activeClassName="selected">All Posts</NavLink></li>
                <li><NavLink exact to='/post/new' activeClassName="selected">New Post</NavLink></li>
            </ul>
        </div>
    )
}

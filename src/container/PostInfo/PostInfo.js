// @flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom';
import BlogStore from '../../store/BlogStore';
import NotFound from '../ErrorPages/404';

export type TypePost = {
    id: number,
    title: string,
    content: string,
    history: Object,
    location: Object,
    match: Object,
    blogStore: BlogStore
}

// functional component example
export default inject('blogStore')(observer((props: TypePost) => {
    const id = parseInt(props.match.params.id);
    
    const post = props.blogStore.posts.find(post => post.id == id);
    
    if (!post) return (<Redirect to={{ pathname: '/404', state: { message: 'Sorry we did not find post with '+id+' ID' } }} />)

    return (
        <div>
            <h5>Post Info</h5>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}))

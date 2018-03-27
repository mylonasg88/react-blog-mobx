// @flow
import React from 'react'
import { inject, observer } from 'mobx-react';

// The manual way to import BlogStore
// import BlogStore from '../store/BlogStore'
import { NavLink } from 'react-router-dom';
// const blogStore = new BlogStore();

// This is annotation sugar for inject() and observer(...)
// @inject('blogStore') @observer

// This is what we would do in es5
export default inject('blogStore')(observer(class AllPosts extends React.Component<*> {
    // export default (observer(class AllPosts extends React.Component<*> {
    state: any = {
        status: "loading"
    }

    async componentDidMount() {
        console.log('looking for posts...');
        const blogStore = this.props.blogStore;

        // dont fetch posts every time
        if (blogStore.posts.length < 1) {
            const p = await blogStore.fetchPosts();
        }

        const posts = blogStore.posts;
        // console.log(p[0].id);
        console.log(posts[0].id)
        this.setState({
            status: "done loading"
        })
    }

    removePost(id: number) {
        // this.props.blogStore.posts.splice(0, id);
        this.props.blogStore.posts = this.props.blogStore.posts.filter(post => post.id !== id)
        this.props.blogStore.happened = "Something"
    }

    render() {
        const blogStore = this.props.blogStore;
        console.log('Posts in array:', this.props.blogStore.posts.length);
        const blogList = blogStore.posts.map(post => <li key={post.id}><NavLink to={'/post/' + post.id} > {post.id} {post.title}</NavLink></li >)
        return (
            <div>
                <h2>All Posts :)</h2>
                <h4>{blogStore.happened}</h4>
                <h4>{this.state.status}</h4>
                <div>
                    <ul>
                        {blogList}
                    </ul>
                </div>
            </div>
        )
    }
}))

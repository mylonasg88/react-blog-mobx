// @flow
import React from 'react'
import BlogStore from '../store/BlogStore'

const blogStore = new BlogStore();

export default class AllPosts extends React.Component<*> {
    state: any = {
        status: "mounting"
    }

    async componentDidMount() {

        const p = await blogStore.fetchPosts();
        const posts = blogStore.posts;
        // console.log(p[0].id);
        console.log(posts[0].id)
        this.setState({
            status: "done mounting"
        })
    }
    render() {
        const blogList = blogStore.posts.map(post => <li key={post.id}>{post.id}: {post.title}</li>)
        return (
            <div>
                <h2>All Posts :)</h2>
                <h4>{this.state.status}</h4>
                <button onClick={() => { console.log(blogStore.posts[0].id) }}>Display</button>
                <div>
                    <ul>
                        {blogList}
                    </ul>
                </div>
            </div>
        )
    }
}

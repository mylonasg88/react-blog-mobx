// @flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import BlogStore from '../store/BlogStore';

type TypeProps = {
    post: {
        id: number,
        title: string,
        content: string
    }
}

// functional component example
export default inject('blogStore')(observer((props: TypeProps) => {
    console.log(props);
    const id = props.match.params.id;
    const post = props.blogStore.posts[id];
    console.log(post);
    return (
        <div>
            <h5>Post Info</h5>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}))

// class component example
// export default class PostInfo extends React.Component<Props> {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.post.title}</h2>
//                 <p>{this.props.post.content}</p>
//             </div>
//         )
//     }
// }

// @flow
import React from 'react'

type Props = {
    post: {
        id: number,
        title: string,
        content: string
    }
}

// functional component example
export default (props: Props) => {
    return (
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.content}</p>
        </div>
    )
}

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

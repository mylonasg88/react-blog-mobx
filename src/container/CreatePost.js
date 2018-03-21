import React from 'react'

export default class CreatePost extends React.Component<*> {
    render() {
        return (
            <div>
                <input type="text" name="title" onChange={(e) => { }} />
                <textarea onChange={e => console.log(e.target.value)}></textarea>
            </div>
        )
    }
}

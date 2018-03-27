// @flow
import React from 'react'
import './CreatePost.css';

export default class CreatePost extends React.Component<*> {
    render() {
        return (
            <div className="form">
                <h3>Create New Post</h3>
                <div className="form-element">
                    <label>Title: </label>
                    <input type="text" name="title" onChange={(e) => { }} />
                </div>
                <div className="form-element">
                    <label>Body: </label>
                    <textarea onChange={e => console.log(e.target.value)}></textarea>
                </div>
                <div className="form-element">
                    <button>Create Post</button>
                </div>
            </div>
        )
    }
}

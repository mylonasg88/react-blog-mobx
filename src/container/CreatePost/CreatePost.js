// @flow
import React from 'react'
import { inject, observer } from 'mobx-react';
import './CreatePost.css';

// This is a Container Component. Because it is updating data in the store.
@inject('blogStore') @observer
export default class CreatePost extends React.Component<*> {

    savePost() {
        console.log(this.props.blogStore.newPost.id);
        console.log(this.props.blogStore.newPost.title);
        console.log(this.props.blogStore.newPost.body);
        this.props.blogStore.createPost();
    }

    _trackTitle(e: any) {
        this.props.blogStore.newPost.title = e.target.value;
    }

    _trackContent(e: any){
        this.props.blogStore.newPost.body = e.target.value;
    }

    render() {
        return (
            <div className="form">
                <h3>Create New Post</h3>
                <div className="form-element">
                    <label>Title: </label>
                    <input type="text" name="title" onChange={this._trackTitle.bind(this)} />
                </div>
                <div className="form-element">
                    <label>Body: </label>
                    <textarea onChange={this._trackContent.bind(this)}></textarea>
                </div>
                <div className="form-element">
                    <button onClick={this.savePost.bind(this)}>Create Post</button>
                </div>
            </div>
        )
    }
}

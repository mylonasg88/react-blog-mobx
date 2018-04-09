// @flow
import React from 'react'
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import './CreatePost.css';

type TypeStateProps = {
    redirect: number,
    success: number
}

// This is a Container Component. Because it is updating data in the store.
@inject('blogStore') @observer
export default class CreatePost extends React.Component<TypeStateProps, *> {

    state = {
        redirect: false,
        success: false
    };

    savePost() {
        console.log(this.props.blogStore.newPost.id);
        console.log(this.props.blogStore.newPost.title);
        console.log(this.props.blogStore.newPost.body);
        this.props.blogStore.createPost();
        this.setState({
            redirect: false,
            success: true
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true,
            success: false
        })
    }

    _trackTitle(e: any) {
        this.props.blogStore.newPost.title = e.target.value;
    }

    _trackContent(e: any) {
        this.props.blogStore.newPost.body = e.target.value;
    }

    render() {
        return (
            <div className="form">
                {this.state.redirect ? <Redirect to="/posts" /> : null}

                {this.state.success ? <SuccessPopup onClick={this.setRedirect} /> : null}
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

const SuccessPopup = (props) => {
    return (
        <div className="popupContainer">
            <div className="popupOverlay"></div>
            <div className="popupContent">
                <h2>Post created successfully!</h2>
                <button onClick={props.onClick}>OK</button>
            </div>
        </div>
    );
}

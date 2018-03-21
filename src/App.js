/* @flow */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observer, inject } from 'mobx-react'

import BlogStore from './store/BlogStore'

type Props = {
  userId: number,
  userName: string
}

const blogStore = new BlogStore();

class App extends Component<Props>{

  componentWillMount() {
    blogStore.fetchPosts().then((data) => {
      console.log(data);
    })
    console.log();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <p>UserID: {this.props.userId}</p>
          <p>UserName: {this.props.userName}</p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;

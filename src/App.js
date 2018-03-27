/* @flow */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observer, inject } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'

import BlogStore from './store/BlogStore'
import Home from './container/Home/Home';
import Navigation from './container/Navigation/Navigation'
import Routing from './container/Routing/Routing';

type TypeProps = {
    userId: number,
    userName: string
}

type TypeData = {
    body: string, id: number, title: string, userId: number
}

const blogStore = new BlogStore();

// Component<TypeProps> represent types of attributes that this component is getting
// when used in a parent component. These attributes MUST be passed into it.
// <props, state>
class App extends Component<TypeProps> {

    componentWillMount() {
        blogStore.fetchPosts()
            .then((data: Array<TypeData>) => {
                console.log(data);
            })
        console.log();
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <Navigation />
                </header>
                <Routing />
            </div>
        );
    }
}

export default App;

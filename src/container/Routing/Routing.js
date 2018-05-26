// @flow
import * as React from 'react';
import {observer, inject} from 'mobx-react';
import { Route, Switch } from 'react-router-dom';

import AllPosts from '../AllPosts';
import CreatePost from '../CreatePost/CreatePost';
import PostInfo from '../PostInfo/PostInfo';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../ErrorPages/404';

// @inject('blogStore') @observer
export default class Routing extends React.Component<*> {
    render() {
        // console.log('rendering Routing');
        // this.props.history.push('/login');
        return (
            <div>
                <Route exact component={Home} path="/"></Route>
                <Route component={AllPosts} path="/posts"></Route>

                <Switch>
                    <Route component={CreatePost} path="/post/new"></Route>
                    <Route component={PostInfo} path="/post/:id"></Route>
                </Switch>

                <Route exact component={Login} path="/login"></Route>
                <Route exact component={NotFound} path='/404'></Route>
            </div>
        )
    }
}

// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllPosts from '../AllPosts';
import CreatePost from '../CreatePost/CreatePost';
import PostInfo from '../PostInfo';
import Home from '../Home/Home';

export default (): React.Element<*> => {
    return (
        <div>
            <Route exact component={Home} path="/"></Route>
            <Route component={AllPosts} path="/posts"></Route>

            <Switch>
                <Route component={CreatePost} path="/post/new"></Route>
                <Route component={PostInfo} path="/post/:id"></Route>
            </Switch>
        </div>
    )
}

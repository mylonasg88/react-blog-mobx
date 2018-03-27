// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import AllPosts from './container/AllPosts'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react'
import BlogStore from './store/BlogStore';

let stores = { blogStore: new BlogStore() }

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App blogStore={stores.blogStore} userId={2} userName="George"  />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

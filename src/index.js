// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllPosts from './container/AllPosts'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react'
import BlogStore from './store/BlogStore';

let stores = { blogStore: BlogStore }

ReactDOM.render(
    <Provider>
        <AllPosts userId={2} userName="George" user={{ name: "Hello" }} />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

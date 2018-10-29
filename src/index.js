// @flow
import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import AllPosts from './container/AllPosts';
import Routing from './container/Routing/Routing';
import registerServiceWorker from './registerServiceWorker';
import BlogStore from './store/BlogStore';

const history = createBrowserHistory();


let stores = { blogStore: new BlogStore() };

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <div>
                <App blogStore={stores.blogStore} history={history} userId={1} userName="George"/>
                {/* <Routing /> */}
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

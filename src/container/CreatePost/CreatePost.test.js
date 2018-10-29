
require('../../tests/TestsInit');

// Import globals
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CreatePost from './CreatePost';
import BlogStore from '../../store/BlogStore';

describe('Create Post', () => {

    let blogStore = null;
    let createPost = null;

    console.log('started');
    // This is async example of instanciation of tests
    // https://stackoverflow.com/questions/45315679/jest-run-async-function-once-before-all-tests
    beforeAll(() => {
        console.log('before all');
        // return new Promise((resolve, reject) => {
        //     console.log('promising... ;P');
        //     setTimeout(() => {
        //         console.log('time out!')
        //     }, 3000)
        //     resolve({ hello: 'world' });
        // }).then(data => data);
        const url = "https://jsonplaceholder.typicode.com/posts";
        return fetch(url).then((response) => response.json())
            .then(data => {data.splice(0, 10)});

    }, 6000);

    //instanciate component
    beforeEach(() => {
        // console.log('2 secs timeout');
        blogStore = new BlogStore();
        createPost = mount(<CreatePost blogStore={blogStore} />);
    }, 6000);

    //https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
    it('Doe render', () => {
        //
        const createPost = mount(<CreatePost blogStore={blogStore} />);

        expect(createPost.find('.form-element').length).toBe(3);
        expect(createPost.find('h3').text()).toBe('Create New Post');
    });

    it('Does submit and calls the store', () => {
        blogStore.createPost = jest.fn();
        createPost.find('button').simulate('click');
        expect(blogStore.createPost.mock.calls.length).toBe(1);
    });

    it('It does create new post and adds to posts array', () => {
        expect(blogStore.posts.length).toBe(0);
        createPost.find('button').simulate('click');
        expect(blogStore.posts.length).toBe(1);
        //shows success message
        expect(createPost.find('.popupContent').length).toBe(1);

        // Executing click on OK button will trigger error with 
        // message: You should not use <Redirect> outside a <Router>
        // let okBtn = createPost.find('.popupContent').find('button');
        // try {
        //     okBtn.simulate('click');
        // }catch(e){
        //     console.log(e.message);
        // }
    })
});

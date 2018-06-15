/**
 * @jest-environment node
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PostInfo from './PostInfo';
import BlogStore from '../../store/BlogStore';

// import jsdom from 'jsdom'
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView;

describe('PostInfo', () => {
    console.log('it runs');
    it('renders post info', () => {
        expect(true).toBe(true);
        const postInfo = render(<PostInfo />);
    })
})

test('adding sum function', () => {
    expect(238).toBe(238);
})

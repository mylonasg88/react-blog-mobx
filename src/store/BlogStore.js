// @flow
import { observable, action, runInAction } from 'mobx'
import dummyPosts from '../dummyData/posts'
import type { TypePost } from '../container//PostInfo';

export default class BlogStore {
    @observable users: Array<*> = [];
    @observable posts: Array<*> = [];
    @observable loading: boolean = false;
    @observable happened: string = "Nothing happened";
    @observable newPost: TypePost = { id: 0, content: "", title: "" };

    @action
    createPost() {
        this.posts.push(this.newPost);
        this.newPost = { id: parseInt(Math.random() * 1000), content: "", title: "" }
        console.log(this.posts.length);
        console.log(this.posts[this.posts.length - 1].id);
        console.log(this.posts[this.posts.length - 1].title);
    }

    @action
    async fetchPosts(): any {
        this.loading = true;
        try {
            // if (this.posts.length > 0) return this.posts;
            const posts = await fetchPostsFromAPI();
            runInAction(() => {
                this.loading = false;
                this.posts = posts;
                window.posts = this.posts;
            })
            console.log(this.posts[0].id);
            return posts;
        } catch (error) {
            runInAction(() => {
                this.loading = false
            })
        }
    }
}

function fetchPostsFromAPI(): Array<*> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const url1 = '../dummyData/posts.js'
    // returns an array
    return dummyPosts;
    // returns a promise 
    // return fetch(url1).then((response) => response.json())
    //     .then(data => data.splice(0, 10))
}

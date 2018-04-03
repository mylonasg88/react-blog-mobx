// @flow
import { observable, action, runInAction } from 'mobx'
import dummyPosts from '../dummyData/posts'
import type { TypePost } from '../container//PostInfo';

export default class BlogStore {
    @observable users: Array<*> = [];
    @observable posts: Array<*> = [];
    @observable loading: boolean = false;
    @observable happened: string = "Nothing happened";
    @observable newPost: TypePost = { id: parseInt(Math.random() * 1000000), content: "", title: "" };

    @action
    createPost() {
        this.posts.push(this.newPost);
        this.newPost = { id: parseInt(Math.random() * 1000000), content: "", title: "" };
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
            // runInAction is a simple utility that takes an code block and 
            //executes in an (anonymous) action. This is useful to create 
            //and execute actions on the fly, for example inside an 
            //asynchronous process. runInAction(f) is sugar for action(f)()
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

function fetchPostsFromAPI(): Promise<*> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const url1 = '../dummyData/posts.js'
    // returns an array
    // return dummyPosts;
    // returns a promise 
    return fetch(url).then((response) => response.json())
        .then(data => data.splice(0, 10))
}

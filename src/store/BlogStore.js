// @flow
import { observable, action, runInAction } from 'mobx'
import dummyPosts from '../dummyData/posts'

export default class BlogStore {
    @observable users: Array<*> = [];
    @observable posts: Array<*> = [];
    @observable loading: boolean = false;
    @observable happened: string = "Nothing happened";

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

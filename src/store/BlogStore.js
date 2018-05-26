// @flow
import { observable, action, runInAction } from 'mobx'
import dummyPosts from '../dummyData/posts'
import type { TypePost } from '../container//PostInfo';

export default class BlogStore {
    @observable users: Array<*> = [];
    @observable posts: Array<*> = [];
    @observable loading: boolean = false;
    @observable isLogging: boolean = false;
    @observable happened: string = "Nothing happened";
    @observable modelPost: TypePost = { id: parseInt(Math.random() * 1000000), content: "", title: "" };
    @observable isLoggedIn: boolean = true;

    @action
    createPost() {
        let post = new Post(this.modelPost.title, this.modelPost.content);
        this.posts.push(post);

        // reset Post Model
        this.modelPost = { id: parseInt(Math.random() * 1000000), content: "", title: "" };
    }

    @action
    async fetchPosts(): any {
        this.loading = true;
        try {
            // if (this.posts.length > 0) return this.posts;
            const posts = await fetchPostsFromAPI();
            // runInAction is a simple utility that takes a code block and 
            // executes in an (anonymous) action. This is useful to create 
            // and execute actions on the fly, for example inside an 
            // asynchronous process. runInAction(f) is sugar for action(f)()
            runInAction(() => {
                this.loading = false;
                this.posts = posts;
                window.posts = this.posts;
            })

            return posts;
        } catch (error) {
            runInAction(() => {
                this.loading = false
            })
        }
    }

    @action
    async login(username: string, password: string) {
        this.isLogging = true;
        console.log('logging ..');

        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ success: true });
                console.log('Logged IN!');
                this.isLoggedIn = true;
            }, 1000)
        });

        this.isLogging = false;
        console.log('logged !!');
    }

    // @computed get isLoggedIn(){
    //     return 
    // }
}

function fetchPostsFromAPI(): ?Promise<*> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const url1 = '../dummyData/posts.js'
    // returns an array
    // return dummyPosts;
    // returns a promise 
    // return fetch(url).then((response) => response.json())
    //     .then(data => data.splice(0, 10));

    // Mock an API call
    return new Promise((resolve, reject) => {
        resolve([{ id: 2342424, 'title': 'My TItle', content: 'My conent about this post' }]);
    }).then(data => data);
}

class Post {
    // { id: parseInt(Math.random() * 1000000), content: "", title: "" };
    id: number;
    content: string;
    title: string;

    constructor(title: string, content: string) {
        this.id = parseInt(Math.random() * 1000000);
        this.content = content;
        this.title = title;
    }
}

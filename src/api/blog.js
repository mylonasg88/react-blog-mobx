// @flow
export function fetchPostsFromAPI(): Promise<*> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const url1 = "../dummyData/posts.js";
    // returns an array
    // return dummyPosts;
    // returns a promise
    // return fetch(url).then((response) => response.json())
    //     .then(data => data.splice(0, 10));

    // Mock an API call
    return new Promise((resolve, reject) => {
        resolve([
            {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                completed: false
            },
            {
                userId: 1,
                id: 3,
                title: "fugiat veniam minus",
                completed: false
            },
            {
                userId: 1,
                id: 4,
                title: "et porro tempora",
                completed: true
            },
            {
                userId: 1,
                id: 5,
                title:
                    "laboriosam mollitia et enim quasi adipisci quia provident illum",
                completed: false
            }
        ]);
    });
}

import BlogStore from "./BlogStore";

describe("BlogStore functionality.", () => {
  const blogStore = new BlogStore();
  const content = "Post content";
  const title = "Post title";

  it("Can create a post", () => {
    blogStore.modelPost.content = content;
    blogStore.modelPost.title = title;

    // Has correct values in model
    expect(blogStore.modelPost.content).toBe("Post content");
    expect(blogStore.modelPost.content).not.toBe("Wrong Content");
    expect(blogStore.modelPost.title).toBe("Post title");
    expect(blogStore.modelPost.title).not.toBe("Wrong Title");

    blogStore.createPost();
    expect(blogStore.posts.length).toEqual(1);
    // Has correct values
    expect(blogStore.posts[0].content).toBe(content);
    expect(blogStore.posts[0].title).toBe(title);
    // Does reset model content
    expect(blogStore.modelPost.content).toBe("");
    expect(blogStore.modelPost.title).toBe("");
  });

  it("Can fetch posts", async () => {
    await blogStore.fetchPosts();
    expect(blogStore.posts.length).toEqual(5);
  });
});

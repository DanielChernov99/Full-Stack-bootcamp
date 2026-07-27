const posts = require("../data/posts");

function getPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find((post) => post.id === id);
}

function createPost(postData) {
  const newPost = {
    id: posts.length + 1,
    ...postData,
  };
  posts.push(newPost);

  return newPost;
}

module.exports = {
  getPosts,
  getPostById,
  createPost,
};

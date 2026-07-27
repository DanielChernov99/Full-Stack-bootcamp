const comments = require("../data/comments");

function getCommentsByPostId(postId) {
  return comments.filter((comment) => comment.postId === postId);
}

function createComment(commentData) {
  const newComment = {
    id: comments.length + 1,
    ...commentData,
  };

  comments.push(newComment);

  return newComment;
}

module.exports = {
  getCommentsByPostId,
  createComment,
};

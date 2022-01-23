const  Comment  = require('../models/Comment');

const commentData = [
  {
    created_at: new Date(),
    comment_text: 'Good Post!',
    user_id: 1,
    post_id: 1
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

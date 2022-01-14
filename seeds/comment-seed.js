const  Comment  = require('../models/Comment');

const commentData = [
  {
    exhibition_date: new Date(),
    comment_text: 'Good Post!',
    user_id: 1,
    post_id: 1
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

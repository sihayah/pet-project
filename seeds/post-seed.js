const  Post  = require('../models/Post');

const postData = [
  {
    title: 'Spider',
    post_url: 'www.spider.com',
    exhibition_date: new Date(),
    description: 'Spider is dangerous animal.',
    user_id: 1
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
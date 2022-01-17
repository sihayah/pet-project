const  Post  = require('../models/Post');

const postData = [
  {
    pet_name: 'Spider',
    exhibition_date: new Date(),
    description: 'Spider is dangerous animal.',
    user_id: 1
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
const  Vote  = require('../models/Vote');

const voteData = [
  {
    user_id: 1,
    post_id: 1,
  }
];

const seedVote = () => Vote.bulkCreate(voteData);

module.exports = seedVote;
const sequelize = require('../config/connection');
const seedPost = require('./post-seed');
const seedComment = require('./comment-seed');
const seedUser = require('./user-seed');
const seedVote = require('./vote-seed');
const seedCareTopics = require('./careTopics-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedPost();
  await seedCareTopics();
  await seedComment();
  await seedVote();

  process.exit(0);
};

seedAll();
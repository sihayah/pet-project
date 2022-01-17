const sequelize = require('../config/connection');
const seedPost = require('./post-seed');
const seedComment = require('./comment-seed');
const seedUser = require('./user-seed');
const seedVote = require('./vote-seed');
const seedCare_Topics = require('./care_topics-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedPost();
  await seedCare_Topics();
  await seedComment();
  await seedVote();

  process.exit(0);
};

seedAll();
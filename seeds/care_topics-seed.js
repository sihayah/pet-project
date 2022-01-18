const  CareTopic  = require('../models/CareTopic');

const care_TopicsData = [
  {
    title: 'Allergy',
    description: 'Type of Allrgyes.',
    post_id: 1,
  },
];

const seedCare_Topics = () => CareTopic.bulkCreate(care_TopicsData);

module.exports = seedCare_Topics;
const  CareTopics  = require('../models/CareTopics');

const careTopicsData = [
  {
    title: 'Allergy',
    description: 'Type of Allrgyes.',
    post_id: 1,
  },
];

const seedCareTopics = () => CareTopics.bulkCreate(careTopicsData);

module.exports = seedCareTopics;
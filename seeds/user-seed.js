const  User  = require('../models/User');

const userData = [
  {
    username: 'user',
    email: 'user@test.com',
    password: '12345',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
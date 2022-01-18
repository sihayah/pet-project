const router = require('express').Router();

const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes.js');
const topicRoutes = require('./topic-routes.js');



router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/topics', topicRoutes);

module.exports = router;
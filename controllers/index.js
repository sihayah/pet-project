const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const createPostRoutes = require('./create-post-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/create', createPostRoutes);
/*router.use((req,res) => {
    res.status(404).end();
});*/

module.exports = router;
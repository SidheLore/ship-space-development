const router = require('express').Router();

const apiRoutes = require('./api');
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
=======
const dashboardRoutes = require('./dashboard-routes');
>>>>>>> feature/dashboard

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
<<<<<<< HEAD
router.use((req, res) => {
    res.status(404).end();
});
=======
>>>>>>> feature/dashboard

module.exports = router;
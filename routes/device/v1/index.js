/**
 * index.js
 * @description :: index route file of device platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./orderRoutes'));
router.use(require('./orderItemRoutes'));
router.use(require('./userRoutes'));

module.exports = router;

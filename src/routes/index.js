const express = require('express');
const router = express.Router();
const routerAccount = require('../modules/account/router')

// Define routes
router.use(routerAccount)

module.exports = router;

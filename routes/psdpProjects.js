const express = require('express');
const router = express.Router();
const controller = require('../controllers/psdpController');
const auth = require('../middleware/auth');

router.get('/', auth, controller.getAll);

module.exports = router;

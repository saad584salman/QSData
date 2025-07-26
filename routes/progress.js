const express = require('express');
const router = express.Router();
const controller = require('../controllers/progressController');
const auth = require('../middleware/auth');

router.get('/', auth, controller.getAll);
router.post('/', auth, controller.create);

module.exports = router;

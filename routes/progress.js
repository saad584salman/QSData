const express = require('express');
const router = express.Router();
const controller = require('../controllers/progressController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.get('/', auth, controller.getAll);
router.post('/', auth, role(['master', 'originator']), controller.create);

module.exports = router;

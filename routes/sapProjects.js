const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/sapController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.get('/', auth, controller.getAll);
router.post(
  '/',
  auth,
  role(['originator', 'master']),
  body('sr_no').isInt(),
  controller.create
);
router.put('/:sr_no', auth, role(['master']), controller.update);
router.delete('/:sr_no', auth, role(['master']), controller.remove);

module.exports = router;

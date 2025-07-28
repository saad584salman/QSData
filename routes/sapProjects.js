import { Router } from 'express';
import { body } from 'express-validator';
import * as controller from '../controllers/sapController.js';
import auth from '../middleware/auth.js';
import role from '../middleware/role.js';

const router = Router();

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

export default router;

import { Router } from 'express';
import * as controller from '../controllers/progressController.js';
import auth from '../middleware/auth.js';
import role from '../middleware/role.js';
const router = Router();
router.get('/', auth, controller.getAll);
router.get('/:id', auth, controller.getById);
router.post('/', auth, role(['master', 'originator']), controller.create);
export default router;

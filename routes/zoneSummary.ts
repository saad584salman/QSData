import { Router } from 'express';
import * as controller from '../controllers/zoneController.js';
import auth from '../middleware/auth.js';

const router: Router = Router();

router.get('/', auth, controller.getAll);

export default router;
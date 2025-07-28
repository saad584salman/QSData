import { Router } from 'express';
import * as controller from '../controllers/psdpController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', auth, controller.getAll);

export default router;

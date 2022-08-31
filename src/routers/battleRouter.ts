import { Router } from 'express';
import { battleResponse } from '../controllers/battleController.js';
import { battleValidator } from '../middlewares/battleValidator.js';

const router = Router();

router.post("/battle", battleValidator, battleResponse);

export default router;
import express from 'express';
import {
  getAllPlayersHandler,
} from '../controllers/players.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';

const router = express.Router();

router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get('/', getAllPlayersHandler);

export default router;

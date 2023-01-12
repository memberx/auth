import express from 'express';
import {
  registerHandler,
} from '../controllers/player.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { validate } from '../middleware/validate';
import { createPlayerSchema } from '../schema/player.schema';

const router = express.Router();

// Register user route
router.post('/register', validate(createPlayerSchema), registerHandler);

export default router;

import express from 'express';
import { SnoozeController } from '../controllers/SnoozeController.js';

const router = express.Router();

// Route to get all messages from the inbox
router.get('/get/:id', SnoozeController.getSnooze);

export default router;
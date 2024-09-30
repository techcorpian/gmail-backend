import express from 'express';
import { DraftController } from '../controllers/DraftController.js';

const router = express.Router();

// Route to get all messages from the inbox
router.get('/get/:id', DraftController.getDraft);

router.post('/send', DraftController.insertDraft);

export default router;

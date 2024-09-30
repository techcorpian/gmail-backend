import express from 'express';
import { SentController } from '../controllers/SentController.js';

const router = express.Router();

// Route to get all messages from the inbox
router.get('/get/:id', SentController.getSent);
router.get('/view/:id', SentController.viewSent);
router.put('/:id/delete', SentController.deleteSent);
router.put('/:id/snooze', SentController.snoozeSent);
router.put('/:id/archive', SentController.archiveSent);
router.put('/:id/read', SentController.readSent);

export default router;
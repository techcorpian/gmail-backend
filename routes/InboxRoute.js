import express from 'express';
import { InboxController } from '../controllers/InboxController.js';

const router = express.Router();

// Route to get all messages from the inbox
router.get('/get/:id', InboxController.getInbox);
router.get('/view/:id', InboxController.viewInbox);
router.post('/send', InboxController.insertInbox);
router.put('/:id/delete', InboxController.deleteMessage);
router.put('/:id/snooze', InboxController.snoozeMessage);
router.put('/:id/archive', InboxController.archiveMessage);
router.put('/:id/read', InboxController.readMessage);


export default router;

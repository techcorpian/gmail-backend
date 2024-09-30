import express from 'express';
import { TrashController } from '../controllers/TrashController.js';

const router = express.Router();

// Route to get all messages from the inbox
router.get('/get/:id', TrashController.getTrash);

export default router;
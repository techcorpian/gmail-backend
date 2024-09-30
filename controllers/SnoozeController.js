import Message from '../models/InboxModel.js';
import Sent from '../models/SentModel.js';

export class SnoozeController {
    static async getSnooze(req, res) {
        try {
          const id = req.params.id;
          const sent = await Sent.find({ fromAddress: id, deleteStatus: 0, snoozeStatus: 1 });
          const inbox = await Message.find({ toAddress: id, deleteStatus: 0, snoozeStatus: 1 });
    
          // Combine `sent` and `inbox` into one array
          const combined = [...sent, ...inbox];
    
          // Send the combined array in the JSON response
          res.status(200).json(combined);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error occurred' });
        }
      }

}
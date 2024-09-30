import Sent from '../models/SentModel.js';

export class SentController {
  static async getSent(req, res) {
    try {
      const id = req.params.id;
      const sent = await Sent.find({fromAddress: id, deleteStatus:0, snoozeStatus:0});
      res.status(200).json(sent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };

  static async viewSent(req, res) {
    try {
      const id = req.params.id;
      const sent = await Sent.find({_id: id});
      res.status(200).json(sent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };

  static async deleteSent(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Sent.findByIdAndUpdate(
        id,
        { deleteStatus: 1 }, // Update deleteStatus to 1
        { new: true } // Optionally return the updated document
      );
      
      if (!updateResult) {
        return res.status(404).json({ message: 'Message not found' });
      }
      
      res.status(200).json({ message: 'Message deleted successfully', updateResult });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  }

  static async snoozeSent(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Sent.findByIdAndUpdate(
        id,
        { snoozeStatus: 1 }, // Update snoozeStatus to 1
        { new: true } // Optionally return the updated document
      );
      
      if (!updateResult) {
        return res.status(404).json({ message: 'Message not found' });
      }
      
      res.status(200).json({ message: 'Message deleted successfully', updateResult });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  }

  static async archiveSent(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Sent.findByIdAndUpdate(
        id,
        { archiveStatus: 1 }, // Update archiveStatus to 1
        { new: true } // Optionally return the updated document
      );
      
      if (!updateResult) {
        return res.status(404).json({ message: 'Message not found' });
      }
      
      res.status(200).json({ message: 'Message deleted successfully', updateResult });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  }

  static async readSent(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Sent.findByIdAndUpdate(
        id,
        { readStatus: 1 }, // Update readStatus to 1
        { new: true } // Optionally return the updated document
      );
      
      if (!updateResult) {
        return res.status(404).json({ message: 'Message not found' });
      }
      
      res.status(200).json({ message: 'Message deleted successfully', updateResult });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  }
  
}
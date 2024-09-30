import Message from '../models/InboxModel.js';
import Sent from '../models/SentModel.js';

export class InboxController {
  static async getInbox(req, res) {
    try {
      const id = req.params.id;
      const inbox = await Message.find({toAddress: id, deleteStatus:0, snoozeStatus:0});
      res.status(200).json(inbox);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };

  static async insertInbox(req, res) {
    const { addressArr, subject, message, userFirstname, userLastname, userMail } = req.body;
    const title = `${userFirstname} ${userLastname}`;
  
    try {
      const promises = addressArr.map(async (element) => {
        const newMessage = new Message({ toAddress: element, subject, message, title, fromAddress: userMail });
        const newSent = new Sent({ toAddress: element, subject, message, title, fromAddress: userMail });
        await newMessage.save();
        await newSent.save();
      });
  
      await Promise.all(promises);
  
      res.status(201).json({ message: 'Message Sent Successfully' });
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  static async viewInbox(req, res) {
    try {
      const id = req.params.id;
      const inbox = await Message.find({_id: id});
      res.status(200).json(inbox);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };

  static async deleteMessage(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Message.findByIdAndUpdate(
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

  static async snoozeMessage(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Message.findByIdAndUpdate(
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

  static async archiveMessage(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Message.findByIdAndUpdate(
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

  static async readMessage(req, res) {
    try {
      const id = req.params.id;
      const updateResult = await Message.findByIdAndUpdate(
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

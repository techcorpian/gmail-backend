import Draft from '../models/DraftModel.js';

export class DraftController {
  static async getDraft(req, res) {
    try {
      const id = req.params.id;
      const draft = await Draft.find({fromAddress: id});
      res.status(200).json(draft);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };

  static async insertDraft(req, res) {
    const { addressArr, subject, message, userFirstname, userLastname, userMail } = req.body;
    const title = `${userFirstname} ${userLastname}`;
  
    try {
 
        const newDraft = new Draft({ toAddress: addressArr, subject, message, title, fromAddress: userMail });
        await newDraft.save();

        res.status(201).json({ message: 'Draft Sent Successfully' });
    } catch (err) {
      res.status(500).json({ err });
    }
  }
  
}
import mongoose from 'mongoose';

const DraftSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  },
  toAddress: {
    type: Array,
    required: false
  },
  fromAddress: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Draft', DraftSchema, 'drafts');
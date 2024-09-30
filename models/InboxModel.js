import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  toAddress: {
    type: String,
    required: true
  },
  fromAddress: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  deleteStatus: {
    type: Number,
    default: 0
  },
  snoozeStatus: {
    type: Number,
    default: 0
  },
  archiveStatus: {
    type: Number,
    default: 0
  },
  readStatus: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Message', MessageSchema);

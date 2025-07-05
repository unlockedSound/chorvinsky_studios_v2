const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page',
    required: true
  },
  s3Url: {
    type: String,
    required: true
  },
  s3Key: {
    type: String,
    required: true
  },
  uploadMethod: {
    type: String,
    enum: ['direct', 'multer'],
    default: 'direct'
  },
  metadata: {
    size: {
      type: Number,
      required: true
    },
    dimensions: {
      width: Number,
      height: Number
    },
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }
}, {
  timestamps: true
});

// Index for faster queries
imageSchema.index({ page: 1, createdAt: -1 });

module.exports = mongoose.model('Image', imageSchema); 
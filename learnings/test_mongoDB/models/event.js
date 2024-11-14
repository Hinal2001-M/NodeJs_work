const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
      attendees: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
    ],
});

module.exports = mongoose.model('Event',eventSchema);
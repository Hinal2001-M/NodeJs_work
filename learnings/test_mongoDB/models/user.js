const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken:{
    type: String,
    allowNull: true
}
});

module.exports = mongoose.model('user', userSchema);

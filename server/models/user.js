const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    require: true,
    type: String,
    trim: true,
    minlength: 1
  }
})

module.exports = {User};

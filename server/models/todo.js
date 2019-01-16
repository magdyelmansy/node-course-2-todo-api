const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false,
    require: true
  },
  completedAt: {
    type: Number,
    default: null,
    require: true
  }
});

module.exports = {Todo};

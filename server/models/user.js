const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var userSchema = new mongoose.Schema({
  email: {
    require: true,
    type: String,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{value} Is Not Avalide Email'
    }
  },
  password: {
    require: true,
    type: String,
    minlength: 6
  },
  tokens: [{
    access: {
      type: 'string',
      required: true
    },
    token: {
      type: 'string',
      required: true
    }
  }]
});

userSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};
userSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
  // user.tokens.push({access, token});
  user.tokens = [{access, token}];
  return user.save().then(() => {
    return token;
  });
};
var User = mongoose.model('User', userSchema);

module.exports = {User};

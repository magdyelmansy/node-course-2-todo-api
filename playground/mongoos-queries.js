const {mongoos} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

User.findById('5c4ef410f566e51049b9adb166aa').then((user) => {
  if(!user) {
    return console.log('There Is No User');
  }
  console.log(user.email);
}, (e) => {
  console.log(e);
});

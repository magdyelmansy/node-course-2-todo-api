const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log('hash', hash);
//   });
// });

var hashedPassword = '$2a$10$zOVCLSaB8LV72WOopUSn2.UDU4cNzCEnzRsVPE0dpOVbqSMEsqnAS';
bcrypt.compare('123!', hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);

// var message = 'This is User Number 3';
// var hash = SHA256(message).toString();
//
// console.log('message: ', message);
// console.log('Hash: ', hash);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
//   console.log('Data Was Not CHanged');
// } else {
//   console.log('Data IS Changed Do Not Trust');
// }

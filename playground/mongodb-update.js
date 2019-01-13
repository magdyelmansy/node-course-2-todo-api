//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect To Mongodb Server');
  }
db.collection('Todos').findOneAndUpdate({completed: false}, {
  $set: {
    completed: true
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c3498e09220ca3778c36583')
}, {
  $set: {
    name: 'Magdy',
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})
  // db.close();
});

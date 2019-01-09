//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect To Mongodb Server');
  }
  console.log('Connected To Mongodb Server');
  // db.collection('Todos').insertOne({
  //   text: 'Something To do',
  //   complete: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable ro insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Magdy Elmansy',
    age: 26,
    location: 'Egypt'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to isert User', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });
  db.close();
});

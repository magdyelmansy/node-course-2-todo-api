//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect To Mongodb Server');
  }
  // console.log('Connected To Mongodb Server');
  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Data', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('You Have ',count);
  // }, (err) => {
  //   console.log('Unable to fetch Data', err);
  // });

  db.collection('Users').find({name:'mike'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable To Fetch Data', err);
  });
  // db.close();
});

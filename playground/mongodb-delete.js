//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//console.log(new ObjectID("mnmnmnmnmnmn"));
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect To Mongodb Server');
  }
 console.log('Connected To Mongodb Server');
 // deleteMany
 // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
 //   console.log(result);
 // })
 //deleteOne
 // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
 //   console.log(result );
 // })
 //findOneAndDelete
 // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
 //   console.log(result);
 // })

 // db.collection('Users').deleteMany({name: 'Magdy Elmansy'}).then((result) => {
 //   console.log(result);
 // })

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5c349410957c3a0ebc76b644')
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
})

  // db.close();
});

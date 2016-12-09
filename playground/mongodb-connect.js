// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Santhosh',
  //   age: 25,
  //   location: 'Chesterfield'
  // }, (error, res) => {
  //   if (error) {
  //     return console.log('Unable to insert user', error);
  //   }
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined,2));
  // });

  db.close();
});

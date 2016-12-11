const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
//deleteOne
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
//findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((results) => {
  //   console.log(results);
  // });

  //deleteMany
    // db.collection('Users').deleteMany({name:'Santhosh'}).then((result) => {
    //   console.log(result);
    // });
  //deleteOne

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('584a2b3d1fd0d86124d0117b')
    }).then((result) => {
      console.log(result);
    });

//  db.close();
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//  db.collection('Todos').findOneAndUpdate({
//    _id :new ObjectID('584dcdca996748d95b01fa0f')
//  }, {
//    $set:{
//      completed:true
//    }
//  },{
//   returnOriginal:false
// }).then((result) => {
//   console.log(result);
// })


db.collection('Users').findOneAndUpdate({
  _id :new ObjectID('584a2bb52c61b63cf47b0776')
}, {
  $set:{
    name:'Santhosh'
  },
    $inc:{
      age: 1
    }
  
},{
 returnOriginal:false
}).then((result) => {
 console.log(result);
});

//  db.close();
});

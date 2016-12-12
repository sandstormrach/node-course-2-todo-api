const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '584e0a8154f598e0688bb7e211';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '584dda9285fe96346048a618';

// User.find({
//   _id: id
// }).then((users) => {
//   console.log('User', users);
// });
//
// User.findOne({
//   _id: id
// }).then((user) => {
//   console.log('User', User);
// });


User.findById(id).then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

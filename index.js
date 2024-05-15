const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then(() => {
    console.log("connection successful")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// User.find({age: {$gt: 20}})
//   .then((res)=>{
//     console.log(res);
// })
//  .catch((err)=>{
//     console.log(err);
//  });

//  User.updateOne({name: "Mrinal"}, {age: 23})
//   .then((res)=>{
//     console.log(res);
//   })
//    .catch((err)=>{
//     console.log(err);
//    });

  // User.deleteOne({name: "Mrinal"}).then((res) => {
  //   console.log(res);
  // });
// User.insertMany([
//     {name: "Mrinal", email: "mbhai@gmail.com", age: 22},
//     {name: "Lucky", email: "Lbhai@gmail.com", age: 20},
//     {name: "Belal", email: "Bbhai@gmail.com", age: 23},
// ]).then((res)=>{
//     console.log(res);
// });

// const User2 = new User({
//     name: "Airan",
//     email: "airanrajsaxena@gmail.com",
//     age: 21,
// });

// User2
//  .save()
//   .then((res)=>{
//     console.log(res);
//   })
//    .catch((err)=>{
//     console.log(err);
//    });





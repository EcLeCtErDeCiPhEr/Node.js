// const bcrypt = require("bcrypt")
// const saltRounds = 10;
// const myPlainextPassword ="ABCD1234";
// const someOtherPlaintextPassword ="Graceonly";

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlainextPassword, salt, function(err, hash) {
//          console.log(hash);

//     });
// });
// const events = require ("events");
// const eventEmitter = new events.EventEmitter();

// const waiter = function received(){
//     console.log("order received");

//     eventEmitter.emit("orderplaced")
// }
// eventEmitter.on("order pizza", waiter);

// eventEmitter.emit("order pizza")

// async method
// var fs = require("fs");
// fs.readFile("data.txt", function (err, data) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data.toString());
// });
// console.log("program ended")

//synch method
// var fs = require("fs");

// var data = fs.readFileSync("data.txt");

//   console.log(data.toString());

// console.log("program ended");

// //CREATING A SERVER
// const http = require("http");
// http.createServer((err, data) => {

// }).listen(5000)


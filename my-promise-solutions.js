//Do some work
// var HTTP = require('q-io/http');
//
// HTTP.read('http://localhost:7000/')
// .then(function(id) {
//   return HTTP.read('http://localhost:7001/' + id);
// })
// .then(function(json) {
//   console.log(JSON.parse(json));
// })
// .then(null, console.log)
// .done();

//Fetch JSON
// var HTTP = require('q-io/http');
//
// HTTP.read("http://localhost:1337")
// .then(function(json) {
//   console.log(JSON.parse(json));
// })
// .then(null, console.log)
// .done();

//Multiple promises
// function all(promise1, promise2) {
//   return new Promise(function(fulfill, reject) {
//     var counter = 0;
//     var array = [];
//
//     promise1.then(function(v) {
//       array[0] = v;
//       counter++;
//
//       if (counter >= 2) {
//         fulfill(array);
//       }
//     });
//
//     promise2.then(function(v) {
//       array[1] = v;
//       counter++;
//
//       if (counter >= 2) {
//         fulfill(array);
//       }
//     });
//   });
// }
//
// all(getPromise1(), getPromise2()).then(console.log);

//An important rule (incomplete)
// function alwaysThrows() {
//   throw new Error("OH NOES");
// }
//
// function iterate(integer) {
//   console.log(integer);
//   return integer + 1;
// }
//
// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(alwaysThrows)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(null, console.log);
//
//Throw an error (incomplete)
// function parsePromised(json) {
//   return new Promise (function(fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// }
//
// parsePromised(process.argv[2])
// .then(null, console.log);

//Values and promises
// function attachTitle(lastName) {
//   return 'DR. ' + lastName;
// }
//
// Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);

//Promise after promise
// var firstPromise = first();
//
// var secondPromise = firstPromise.then(function (e) {
//   return second(e);
// });
//
// secondPromise.then(console.log);

//Shortcuts
// var promise = Promise.resolve('SECRET VALUE');
// var promise = Promise.reject(new Error('ERROR VALUE'));
//
// promise.then(console.log);
// promise.catch(function(err) {
//   console.log(error);
// });

//Always asynchronous
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });
//
// promise.then(console.log);
//
// console.log('MAIN PROGRAM');

//To reject or not to reject
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });
//
// function onReject (error) {
//   console.log(error.message);
// }
//
// promise.then(console.log, onReject);

//Reject a promise
// var promise = new Promise(function (fulfill, reject) {
//       setTimeout(function() {
//         reject(new Error('REJECTED!'));
//       }, 300);
//     });
//
//     function onReject (error) {
//       console.log(error.message);
//     }
//
//     promise.then(null, onReject);

//Fulfill a promise
// 'use strict';
//
//   var promise = new Promise(function (fulfill, reject) {
//     setTimeout(function() {
//      fulfill('FULFILLED!');
//     }, 300);
//   });
//
//   promise.then(console.log);

//Warmup
// setTimeout(showAlert, 300);
//
// function showAlert() {
//   console.log("TIMED OUT!");
// }

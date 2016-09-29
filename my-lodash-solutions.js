//Start templating
// 'use strict';
//
// var _ = require("lodash");
//
// var worker = function(obj) {
//
//   var template = ('Hello <%= name %> (logins: <%= login.length %>)');
//
//   return _.template(template)(obj);
//
// };
//
// module.exports = worker;

//Analyze
// 'use strict';
//
// var _ = require("lodash");
//
// var worker = function(arrObj) {
//   arrObj = _.sortBy(arrObj, 'income');
//
//   var average,
//       overperform,
//       underperform;
//
//   average = _.reduce(arrObj, function(sum, num) {
//     return sum + num.income;
//   }, 0);
//
//   average = average / arrObj.length;
//
//   overperform = _.filter(arrObj, function(num) {
//     return num.income > average;
//   });
//
//   underperform = _.filter(arrObj, function(num) {
//     return num.income <= average;
//   });
//
//   return {
//     average: average,
//     overperform: overperform,
//     underperform: underperform
//   };
//
// };
//
// module.exports = worker;

//Give me an overview (incomplete)
// 'use strict';
// var _ = require("lodash");
//
//     var worker = function(obj) {
//       obj = _.groupBy(obj, 'article');
//
//       var totalOrders = [];
//
//       _.forEach(obj, function(key, value) {
//         key = parseInt(key);
//
//         if (value.length === 1) {
//
//         }
//
//         totalOrders.push({
//
//         });
//       });
//     };
//
//     module.exports = worker;

//Count the comments
// 'use strict';
// var _ = require("lodash");
//
// var worker = function(comments) {
//     var commentCount = [];
//
//     comments = _.groupBy(comments, 'username');
//
//     _.forEach(comments, function(count, name) {
//         commentCount.push({
//           username: name,
//           comment_count: _.size(count)
//         });
//     });
//
//     return _.sortBy(commentCount, 'comment_count').reverse();
// };
//
// module.exports = worker;

//Chain mail
// 'use strict';
// var _ = require("lodash");
//
// var worker = function(arr) {
//     return _.chain(arr)
//           .sortBy()
//           .map(function(word) {
//             return word + 'Chained';
//           })
//           .map(function(word) {
//             return word.toUpperCase();
//           })
//           .value();
// };
//
// module.exports = worker;

//Everyone is Min
// 'use strict';
// var _ = require("lodash");
//
// var worker = function(obj) {
//   var arrays = {
//     hot: [],
//     warm: [],
//   };
//
//   function isHot(obj) {
//     return obj > 19;
//   }
//
//     _.forEach(obj, function (city, cityname) {
//
//       if (_.every(city, isHot)) {
//         arrays.hot.push(cityname);
//       }
//       else if (_.some(city, isHot)) {
//         arrays.warm.push(cityname);
//       }
//
//     });
//
//     return arrays;
// };
//
// module.exports = worker;

//In Every Case
// var _ = require("lodash");
//
//     var worker = function(obj) {
//       return _.forEach(obj, function(city){
//         if (city.population > 1) {
//           city.size = 'big';
//         }
//         else if (city.population > 0.5) {
//           city.size = 'med';
//         }
//         if (city.population < 0.5) {
//           city.size = 'small';
//         }
//       });
//     };
//
//     module.exports = worker;

//Sort me
// var _ = require("lodash");
//
// var worker = function(obj) {
//     return _.sortBy(obj, function(age) {
//       return -age.quantity;
//     });
// };
//
// module.exports = worker;

//Getting started
// var _ = require("lodash");
//
// var worker = function(obj) {
//   return _.filter(obj, { active: true });
// };
//
// module.exports = worker;

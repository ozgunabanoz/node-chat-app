var moment = require('moment');

var someTimeStamp = moment().valueOf();

console.log(someTimeStamp);

var date = moment();

console.log(date.format('h:mm a - ddd MMM Do, YYYY'));

console.log(date.format('h:mm a'));

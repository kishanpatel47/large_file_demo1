// function addDays(dateObj, numDays) {
//   dateObj.setDate(dateObj.getDate() + numDays);
//   return dateObj;
// }

// var now = new Date();
// var tomorrow = addDays(new Date(), 1);
// var nextWeek = addDays(new Date(), 7);

// alert('Today: ' + now + '\nTomorrow: ' + tomorrow + '\nNext week: ' + nextWeek);
let days = [];
let daysRequired = 7;

for (let i = daysRequired; i >= 1; i--) {
  days.push(moment().subtract(i, 'days').format('dddd, Do MMMM YYYY'));
}

console.log(days);

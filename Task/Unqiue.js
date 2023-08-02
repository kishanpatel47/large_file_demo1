// const arrpeople = [
//   {
//     id: 1,
//     name: 'Kishan',
//     city: 'Vadodara',
//     otherInfo: {
//       gender: 'Male',
//       mobile: '1234567890',
//     },
//   },
//   {
//     id: 2,
//     name: 'Shivam',
//     city: 'Vadodara',
//     otherInfo: {
//       gender: 'Male',
//       mobile: '0012345678',
//     },
//   },
//   {
//     id: 3,
//     name: 'Krishna',
//     city: 'Ahmedabad',
//     otherInfo: {
//       gender: 'Female',
//       mobile: '00712345678',
//     },
//   },
//   {
//     id: 4,
//     name: 'Pooja Mam',
//     city: 'Shimla',
//     otherInfo: {
//       gender: 'Female',
//       mobile: 'xx345678xx',
//     },
//   },
//   {
//     id: 5,
//     name: 'Chota Bheem',
//     city: 'Dholakpur',
//     otherInfo: {
//       gender: 'Cartoon',
//       mobile: '0000000000',
//     },
//   },
//   {
//     id: 6,
//     name: 'Tom',
//     city: 'Cartoon Network',
//     otherInfo: {
//       gender: 'Cartoon',
//       mobile: '0000000000',
//     },
//   },
//   {
//     id: 7,
//     name: 'Jerry',
//     city: 'Cartoon Network',
//     otherInfo: {
//       gender: 'Cartoon',
//       mobile: '9999999999',
//     },
//   },
//   {
//     id: 8,
//     name: 'Mouse',
//     city: 'Home',
//     otherInfo: {
//       gender: 'Animal',
//       mobile: '',
//     },
//   },
//   {
//     id: 9,
//     name: 'Cat',
//     city: 'Home',
//     otherInfo: {
//       gender: 'Animal',
//       mobile: '',
//     },
//   },
//   {
//     id: 10,
//     name: 'Mohan',
//     city: 'Home',
//     otherInfo: {
//       gender: 'Male',
//       mobile: '123456789',
//     },
//   },
//   {
//     id: 11,
//     name: 'Vivek sir',
//     city: 'Home',
//     otherInfo: {
//       gender: 'Male',
//       mobile: '00000000000000000000',
//     },
//   },
// ];
// // var uniqueojectarray = [
// //   ...new Map(arrpeople.map(item => [item['gender'], item])).values(),
// // ];
// // let testd_uniqueOjectArray_map = arrpeople.map(item => [
// //   item['Shimla' + item.city],
// //   item,
// // ]);
// console.log(unique);
// var unique = arrpeople.filter((v, i, a) => a.indexOf(v) === i);
// Working
// let a = ['Male', 'FeMale', 'Male', 'FeMale', 'Male', 'Male'];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

let arrTitle = [
  {title: 'Male'},
  {title: 'FeMale'},
  {title: 'Male'},
  {title: 'FeMale'},
  {title: 'Male'},
  {title: 'Male'},
];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

// const data = [
//   {group: 'kishan', name: 'SD'},
//   {group: 'k', name: 'FI'},
//   {group: 'kishan', name: 'MM'},
//   {group: 'B', name: 'CO'},
// ];
// const unique = [...new Set(data.map(item => item.group))];
// console.log(unique);

var filter = [...new Set(arrTitle.map(img => img.title))];
console.log('filter = ' + JSON.stringify(filter, undefined, 2));
// or in ES5
// var filter = function(tag, arr) {
//    return arr.filter(function(img) {
//        return img.tag === tag;
//    })
// };

// const filtered = filter('people = ', images);

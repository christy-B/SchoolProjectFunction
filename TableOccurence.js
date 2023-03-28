
let results = {};
const data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];


results = data.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
console.log(results);
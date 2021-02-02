const numbers = [1,3,5,2,7,9];
// const result = numbers.map(function(element) {
//     return element * element;
// });
// console.log(result);

// const result = numbers.map(element => element * element * element);

// const result = numbers.filter(x => x % 2 == 0);

const result = numbers.find(x => x > 5); // Find immediate max.
console.log(result);
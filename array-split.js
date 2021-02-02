const numbers = [1,2,11,4,5,6,14,8,9];
const part = numbers.slice(2, 5);
console.log(numbers);
const remove = numbers.splice(2, 5);
console.log(remove);
console.log(numbers);

const add = remove.join(" ");
console.log(add);
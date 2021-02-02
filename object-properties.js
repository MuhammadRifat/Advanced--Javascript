const students = [
    {id: 21, name: 'Rifat'},
    {id: 26, name: 'Romjan'},
    {id: 24, name: 'Morshed'}
];

let output = [];

// for(let i = 0; i < students.length; i++){
//     output.push(students[i].name);
// }

const result = students.map(Element => Element.name);

console.log(result);
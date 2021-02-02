function restaurant(){
    let serve = 0;
    return function table(){
        return serve++;
    }
}
const table1 = restaurant();

console.log(table1());
console.log(table1());
console.log(table1());
console.log(table1());

const table2 = restaurant();
console.log(table2());
console.log(table2());
console.log(table1());
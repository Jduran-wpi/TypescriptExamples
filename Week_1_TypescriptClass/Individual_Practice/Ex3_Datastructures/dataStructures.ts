//Ex File

//Array
let arr: Array<string> = [];

arr.push('movie1');
arr.push('movie2');
arr.push('movie3');

console.log(arr);

//Set
let set = new Set<string>(arr);

set.add('movie4');
set.add('movie5');

console.log(set);

//Map
let person: Map<string, string | number> = new Map();

person.set('name', 'jonathan');
person.set('age', 26);
person.set('eyeColor', 'brown');

console.log(person);
//Array
let fruit_array = ['apple', 'oranges', 'banana'];
fruit_array.push('grape');
fruit_array[2] = 'apple';
console.log(`Array length: ${fruit_array.length}`);
console.log(fruit_array);
//Set
//pass in fruit array and initializes the set with the array contents
let fruit_set = new Set(fruit_array);
console.log(`Set size: ${fruit_set.size}`);
console.log(fruit_set);
//Map
let fruit_map = new Map();
fruit_map.set(0, 'apple');
fruit_map.set(1, 'orange');
fruit_map.set(2, 'pear');
fruit_map.set(1, 'changedYou');
console.log(`Map size: ${fruit_map.size}`);
console.log(fruit_map);

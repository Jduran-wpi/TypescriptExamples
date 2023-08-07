//4 different color values
//These are being stored as integer numbers? Indexes probably
//can initialize the integer key to whatever you want.
/**
 * can do Blue =100,
 * Red = 40, etc..
 * cannot access enum value name if we use a string name key pair!!!
 */


//syntax 1
enum Colors{
    Blue = 'blue',
    Red = 'red',
    Green = 'green',
    Purple = 'purple'
};

/*/syntax 2
enum Colors{
    Blue = 0,
    Red = 1,
    Green = 2,
    Purple = 3
};
*/

/*/syntax 3
enum Colors{
    Blue,
    Red,
    Green,
    Purple
};
*/

let person = {
    name: 'Audrey',
    favoriteColor: Colors.Green
};

console.log(person);
//favorite color variable is just an integer
//console.log();
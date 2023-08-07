//4 different color values
//These are being stored as integer numbers? Indexes probably
//can initialize the integer key to whatever you want.
/**
 * can do Blue =100,
 * Red = 40, etc..
 */
var Colors;
(function (Colors) {
    Colors["Blue"] = "blue";
    Colors["Red"] = "red";
    Colors["Green"] = "green";
    Colors["Purple"] = "purple";
})(Colors || (Colors = {}));
;
var person = {
    name: 'Audrey',
    favoriteColor: Colors.Green
};
console.log(person);
//favorite color variable is just an integer
console.log(Colors);

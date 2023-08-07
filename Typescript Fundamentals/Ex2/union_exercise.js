"use strict";
function lengthOrValue(myParam) {
    if (typeof (myParam) === 'number') {
        return myParam;
    }
    else if (typeof (myParam) === 'string') {
        return myParam.length;
    }
    else {
        return 0;
    }
}
console.log(lengthOrValue(5));
console.log(lengthOrValue('some string'));
//# sourceMappingURL=union_exercise.js.map
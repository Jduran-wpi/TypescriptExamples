
function lengthOrValue(myParam: number | string): number {
    //how to check input datatype
    if(typeof(myParam) === 'number'){
        return myParam;
    }
    else if(typeof(myParam) === 'string'){
        return myParam.length;
    }
    else{
    return 0;
    }
    //end of if-else conditional
}

console.log(lengthOrValue(5));
console.log(lengthOrValue('some string'));
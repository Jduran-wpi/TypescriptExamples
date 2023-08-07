/**
 * Ex file for declaring union & intersection types.
 */
//Union
let numOrString: number | string | boolean;

numOrString = 1;
numOrString = 'stringy';
numOrString = false;

//intersection
//not useful when using primitive types
let numAndString: number & string;

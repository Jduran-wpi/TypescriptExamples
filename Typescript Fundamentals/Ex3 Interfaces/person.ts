interface Person {
    name: string;
    age: number;
}

interface Employee extends Person{
    title?: string; //optional property
    doWork(): void; 
}

//-------------------------
let engineer: Employee = {
    name: 'Daniel',
    age: 48,
    doWork: () => console.log('Busy Working')
}

engineer.doWork();
engineer.title = 'Web Developer';
console.log(engineer);
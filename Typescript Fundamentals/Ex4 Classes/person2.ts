interface Person {
    name: string;
    age: number;
}

interface Employee extends Person{
    title?: string; //optional property
    doWork(): void; 
}

class Manager implements Employee{

    constructor(public department: string, emp_name: string, emp_age: number){
        this.name = emp_name;
        this.age = emp_age
    }

    title?: string | undefined;
    doWork(): void {
        console.log('Manager at Work.');
    }
    name: string;
    age: number;
    
}
//-------------------------

let mgr: Manager = new Manager('Web Dev', 'Michelle', 30);
mgr.doWork();
console.log(mgr);
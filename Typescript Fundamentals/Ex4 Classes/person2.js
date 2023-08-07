"use strict";
class Manager {
    constructor(department, emp_name, emp_age) {
        this.department = department;
        this.name = emp_name;
        this.age = emp_age;
    }
    doWork() {
        console.log('Manager at Work.');
    }
}
//-------------------------
let mgr = new Manager('Web Dev', 'Michelle', 30);
mgr.doWork();
console.log(mgr);
//# sourceMappingURL=person2.js.map
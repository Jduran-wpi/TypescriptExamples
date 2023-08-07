"use strict";
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItemToCollection(newItem) {
        this.items.push(newItem);
    }
    clearCollection() {
        this.items = [];
    }
}
let data = new DataCollection();
data.addItemToCollection('apple');
data.addItemToCollection('orange');
data.addItemToCollection('pear');
console.log(data);
//# sourceMappingURL=generic_class.js.map
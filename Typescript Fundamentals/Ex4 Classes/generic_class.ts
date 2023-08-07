class DataCollection<T>{
    
    items: T[] = [];
    //same as items: Array<T> = [];

    addItemToCollection(newItem: T): void{
        this.items.push(newItem);
    }

    clearCollection(): void{
        this.items = [];
    }
}

//---------------------------------------

let data = new DataCollection<string>();

data.addItemToCollection('apple');
data.addItemToCollection('orange');
data.addItemToCollection('pear');

console.log(data);
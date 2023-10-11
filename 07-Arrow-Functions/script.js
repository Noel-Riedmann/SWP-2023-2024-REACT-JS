//e.g.:
let calculate = (a, b) => a + b;

class Person {
  constructor(name) {
    this.name = name;
  }

  //arrow function doesn't redifine scope
  printName() {
    setTimeout(() => {
      console.log("Arrow function: " + this.name);
    }, 100);
  }
}

let person = new Person("John Doe");
//result
person.printName();
//no result because of "this"
console.log("Normal log: " + this.name);

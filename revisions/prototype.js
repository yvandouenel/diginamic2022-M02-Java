function Person(name) {
  this.name = name;
}
// Le prototype est une propriété de type objet qui sera partagée par toutes les instances de la fonction constructeur
Person.prototype.introduceMySelf = function () {
  console.log(`Hello, my name is ${this.name}`);
}

let bob = new Person("Dylan");
console.log(`bob :`, bob);
bob.introduceMySelf();

const fruits = ["cerise", "pomme"];
console.log(`fruits :`, fruits);

/* while(bob) {
  console.log(bob.constructor.name);
  bob = Object.getPrototypeOf(bob);
} */
Person.prototype.testprop = "prop via Person";
bob.testprop = "prop directe de bob";

// spread operator
const fruit_bis = ["abricot", ...fruits, "figue"];// copie par valeur 
console.log(`fruit_bis`, fruit_bis);
const testobj = {age:51}
const jose = { ...bob, age:51 }; // copie par valeur
console.log(`josé : `, jose);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
console.log(`mergedObj : `, mergedObj);

const p1 = {
  name:"Bob"
}
const p2 = {
  age:"51"
}
const mergedp1p2 = { ...p1, ...p2 };
console.log(`mergedp1p2`, mergedp1p2);





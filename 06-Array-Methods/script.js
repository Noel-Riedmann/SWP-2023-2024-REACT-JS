const items = [
  { name: "TV", price: 100 },
  { name: "Game", price: 200 },
  { name: "Car", price: 150 },
];

//filter by price without changing original array
const filteredItems = items.filter((item) => {
  return item.price >= 150;
});

//only return items which match map condition
const itemNames = items.map((item) => {
  return item.name;
});

//returns first item with the condition beeing true
const foundItem = items.find((item) => {
  return item.name == "Game";
});

//log functions aboth
console.log(filteredItems);
console.log(itemNames);
console.log(foundItem);

//loop through all items
items.forEach((item) => {
  console.log(item.name);
});

//returns true or false if condition is met (if one item meets the condition its true)
const hasExepensiveItem = items.some((item) => {
  return item.price >= 100;
});

console.log(hasExepensiveItem);

//returns true or false if condition is met (if multiple or one item meets the condition its true)
const hasExepensiveItems = items.every((item) => {
  return item.price >= 100;
});

console.log(hasExepensiveItems);

//its going through all items and takes current total and adds the price each time
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

const numbers = [1,2,3,4,5]

//returns true or false if the array has the value
const includesNumber = numbers.includes(3)

console.log(includesNumber)
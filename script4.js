let person = {
  name: 'Monique',
  age: 50
};

console.log(person);

//log alleen naam met dot notation
console.log(person.name);

//log alleen leeftijd met dot notation
console.log(person.age);

//log alleen naam met bracket notation
console.log(person['name']);

//log alleen leeftijd met bracket notation
console.log(person['age'])

//log nieuwe naam met bracket notation
person['name'] = 'Jens';
console.log(person.name);

//log nieuwe leeftijd met bracket notation
person['age'] = 51;
console.log(person.age)

let selectedColors = ['Groen','Blauw','Rood'];
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);

selectedColors.push('Geel');
console.log(selectedColors);

selectedColors.push(5);
console.log(selectedColors);

selectedColors.push({greeting: "hi ik ben een object"});
console.log(selectedColors);

let last = selectedColors[selectedColors.length - 1];
console.log(last);

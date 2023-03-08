var arraySeasonalFruits = ["Banana","Apple", "mango", "Water melon"]
var firstelement ="Banana";
var lastelement ="Water melon";
console.log(`First and laste element given arrey: ${firstelement} and ${lastelement}`)

console.log("*********Step-2***********");
var arraySeasonalFruit= ["Banana","Apple", "mango", "Water melon"]
arraySeasonalFruit.unshift("Papaya")
console.log(arraySeasonalFruit)

console.log("*********Step-3***********");
var arraySeasonalFruit =  ["Banana","Apple", "mango", "Water melon"]
arraySeasonalFruit.splice(2,1)
console.log("Remove Element of mango");
console.log(arraySeasonalFruit);

console.log("*********Step-4***********");

var arraySeasonalFruit= ["Banana","Apple", "mango", "Water melon"]
arraySeasonalFruit.push("pinapple")
console.log("Adding last element");
console.log(arraySeasonalFruit);

console.log("*********Step-5***********");
var arraySeasonalFruit= ["Banana","Apple", "mango", "Water melon"]
arraySeasonalFruit.splice(3, 0,"DragonFruit")
console.log(arraySeasonalFruit);

console.log("*********Step-6***********");
var arraySeasonalFruit= ["Banana","Apple", "mango", "Water melon"]
arraySeasonalFruit.splice(2,1,"kivi")
console.log(arraySeasonalFruit);

console.log("*********Step-7***********");
var arraySeasonalFruits= ["Banana","Apple", "mango", "Water melon"]
arraySeasonalFruits.slice(1,3);
console.log(arraySeasonalFruit);


console.log("*********Step-8***********");
var arraySeasonalFruit= ["Banana","Apple", "mango","dragonFruit", "Water melon"]
arraySeasonalFruit.length=3;
console.log("length 3 Element");
console.log(arraySeasonalFruit);
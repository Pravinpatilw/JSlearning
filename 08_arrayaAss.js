
console.log(`********Total Number are available in array is*******`);

const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];
const arrayofNumbers = arrayNumbers.length
console.log(`Total Number are available in array is: ${arrayofNumbers}`)

console.log(`*******Step-2*********`);
const firstelement =20;
const lastelement =11;
console.log(`First element given arrey: ${firstelement}`)
console.log(`Last element  given arrey: ${lastelement}`)

console.log(`*******Step-3*********`);
// const lastthirstelement= arrayNumbers.length 
const thirstlast =60;
console.log(`thirst last element given arrey :${thirstlast}`);

console.log(`*******Find Even number *********`);

const array = [20,31,40,25,23,11,29,9,60,2,11];

const even = array.filter(number => {
  return number % 2 === 0;
});

console.log(even); 

console.log(`*******Find Odd number *********`);
let arr = [20,31,40,25,23,11,29,9,60,2,11]

let odds = arr.filter(num => num%2)

console.log(odds)

console.log(`*******even position number sum  *********`);

    const arrayofNumber =[20,31,40,25,23,11,29,9,60,2,11];
let filtered = arrayofNumber.filter((a,i) => i%2===0);
let sumeven=0;
for (let index = 0; index < filtered .length; index++) {
  const element = filtered [index];
  sumeven = sumeven + element
  
}
console.log(filtered);
console.log(`Sum of an Array element is: ${sumeven}`);

console.log(`*******Odd position number sum  *********`);
const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
let odd = arrayNumber.filter((a,i)=> i%2===1);
let sumodd=0;
for (let index = 0; index < odd.length; index++) {
  const element =odd [index];
  sumodd = sumodd + element
  
}
console.log(odd)
console.log(`Sum of an Array element is: ${sumodd}`);

console.log(`*******sum of element *********`);
const arrayfNumber=[20,31,40,25,23,11,29,9,60,2,11];
let sum = 0; // 10
for (let index = 0; index < arrayfNumber.length; index++) {
    const element = arrayfNumber[index];
   sum = sum + element;
}
console.log(`Sum of an Array element is: ${sum}`);


console.log(`*******Multiple of 5 element *********`);

const arrayNumberss=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumberss.length; index++) {
  const element = arrayNumberss[index];
  
const Multiple= arrayNumberss.filter(number => {
  return number % 5 === 0;
});
console.log(`Multiple of 5 ${Multiple}`);
}

console.log(`******** 115 available or not *********`);

const arrayNum=[20,31,40,25,23,11,29,9,60,2,11];

const is8Available = arrayNum.includes(115)
console.log(`Is 8 available: ${is8Available} `)

console.log(`******** 23 available or not *********`);
const arrayofNum=[20,31,40,25,23,11,29,9,60,2,11];

const is9Available =arrayofNum.includes(23)
console.log(`Is 9 available: ${is9Available} `)

console.log(`******** insert 55 66 before index 3 *********`);

var arrayOfNumbers = [20,31,40,25,23,11,29,9,60,2,11];
arrayOfNumbers.splice(2,3,55,66);
console.log(arrayOfNumbers);

console.log(`******** delete Starting 4 element  *********`);
var arrayOfNumbers = [20,31,55,66,40,25,23,11,29,9,60,2,11];
const splicedArray = arrayOfNumbers.splice(4,3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

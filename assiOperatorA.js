console.log("****Step1****");

function greaterNumber(num1, num2){
    var result = num1>num2 ? num1 : num2;
     console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
 }
 greaterNumber(10, -10);
 greaterNumber(800, 899);
 
 console.log("****Step2****");

function isEvenOrOddNum(num){
  var result=  num%2==0 ? true : false
return result;
} 
var result = isEvenOrOddNum(29);
console.log (` 29 Is even or Odd, true -even, False-Odd: ${result}` );
console.log(` 29 Is even or Odd --> true -even,Flase -Odd: ${isEvenOrOddNum(44)} ` );
console.log(`0 Is even or Odd --> true-even,false-Odd: ${isEvenOrOddNum(0)}`);
console.log(`101 Is even or Odd --> true-even,false-Odd: ${isEvenOrOddNum(101)}`);

console.log("****Step3****");

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word length "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word length "Developer" has ${wordLength("Google Chrome")} length` );
 console.log(`Word length "Google" has ${wordLength("Google Chrome")} length` );


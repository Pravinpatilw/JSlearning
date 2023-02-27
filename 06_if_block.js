console.log('start');
var num =10;
if (num);{
    console.log("inside if");
    console.log(`number is positive ${num}`);
}
console.log('End');

var ageForVote=18;
if (ageForVote >=18){
    console.log("you are elogible for voting");
    console.log(`age is :${ageForVote}`);
}
console.log("End of next if block");

function checkEvenOdd(Num){

    if (num%2==0) {
    return "Even";
    }
    if (num52==0){
        return "Odd"
    }

}
var result = checkEvenOdd(45);
console.log(`given number 8 is ${result}`);


var num1=5;
if (num>0) {
    console.log(`Number ${num} is Positive`);
} else{
    console.log(` Number ${num} is Negative`);
}
   

function maleMarriageEligibility(gender, age,boyName){
    if (gender=="Male" && age>=21) {
        console.log("You are eligible");
    } else {
        console.log("Not Eligible");
    }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");
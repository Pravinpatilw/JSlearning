
let arr = [20,31,40,25,23,11,29,9,60,2,11];

let odds = arr.filter(n => n%2)

console.log(odds)

let bankSbi = {
    bankName: "SBI Bank",
    accountName: "Raju D Dudhbhate",
    accountNo: "65478256987",
   ifscCode: "Saving",
   
}

let bankLocation = {
    street: "JM Road",
    city: "Pune",
    pinCode: "411502"
}

// let rateOfInterest = {
//     homeLoanInterest, personalLoanInterest, dueInterest
// }

const newbankSbi = bankSbi;
console.log(newbankSbi);

console.log("  ");
console.log("=========Object assign========= ");
console.log("  ");

const objectDetails = Object.assign( newbankSbi, bankLocation);
console.log(objectDetails);
console.log(`Type of "objectDetails" is:  ${typeof objectDetails}`);

console.log("  ");
console.log("=========Result by using spread Operator =========");
console.log(" ");
const resultbank = {...bankSbi} 
const newbanklocation = {...bankLocation};
console.log(resultbank, newbanklocation);


console.log("  ");
console.log("=========Merge 3 objects =========");

console.log("=========SBI Details ========="); 
console.log(" ");

let rateofInterest = {
    homeLoanInterest : 8.75,
    personalLoanInterest : 12.85,
    dueInterest: 6

}

  console.log(` merge object by using loop`)
const mergedObject = Object.assign(newbankSbi, bankLocation, rateofInterest );
console.table(mergedObject);

const arrayOfBaNK = [mergedObject]

for (const element of arrayOfBaNK) {

  
   // console.log(`SBI Bank Details: ${element.bankName}, ${element.accountName}, ${element.accountNo}, ${element.ifscCode}`)
   console.table(element);
    
}
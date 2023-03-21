
console.log(`*******Step-1*******`);
const bankSbi=  {
        bankName : "sbiBank",
        account: 4897564,
        ifsc: "SBIN0004598",
        location:"Hinjewadi",
}

  console.log(bankSbi);

  console.log(`********Step-2*******`);
  const bankLocation = {
    street : "Wakad",
    city :"pune",
    pincode:411057,
  }
console.log(bankLocation);

console.log('Deep clone using spread operator')
let newbanksbi = { ...bankSbi,...bankLocation} // Deep clone using spread operator
console.log(newbanksbi)
console.log(bankLocation);

let rateOfinterest = {
homeLoaninterest:9.9,
personalLoaninterest:13,
dueinterest:10,
}
 let sbiDetais = {
    ...bankSbi,
    ...bankLocation,
    ...rateOfinterest

}
console.table(sbiDetais);

console.log(`*****TRAVERS MARGE OBJECT USING lOOP*****`);

let sbiDetails= [bankSbi,rateOfinterest, bankLocation];
console.log(sbiDetails);
 for (const element of sbiDetailsect) {
  
 } 


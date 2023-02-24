
console.log("******Step1******");

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);

  function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " you are  not eligible for marriag" ;
    return result;
 }
 var result = maleMarriageEligibility("Male", 17, "Stiwjob");
 console.log(result);

  console.log("******Step2******");

  function femaleMarriageEligibilit(gender, age, girlName) {
   var result = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : " you are  not eligible for marriag " ;
   return result;
   
    }
    var result =femaleMarriageEligibilit("female", 16, "jenifer")
    console.log(result);

    
    function femaleMarriageEligibility(gender, age, girlName){
      var result = (gender=="feMale" && age>=18) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
      return result;
   }
    var result = maleMarriageEligibility("Male", 25, "Milinda gates");
    console.log(result);
  
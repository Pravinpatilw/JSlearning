function checkleaapyear(leapeyear) {

    if ( leapeyear == null ||  isNaN(leapeyear)|| (typeof leapeyear != "number"))
    {
        console.log(`${leapeyear} is not valid year. Please enter valid input..`);
       
     }
  
    else{
        if (leapeyear%4 == 0 &&  (typeof leapeyear == "number") ) {
            console.log(`${leapeyear} is leapyear`);
       
        }
        else{
      
        console.log(`${leapeyear} is not leapyear`);
        }
    }
    
       
        
    }
       






checkleaapyear(2020);
checkleaapyear(1600);
checkleaapyear(1999);
checkleaapyear(2022);
checkleaapyear(1945);
checkleaapyear(null);
checkleaapyear("Twenty Twenty");
checkleaapyear(NaN);
checkleaapyear(1970);

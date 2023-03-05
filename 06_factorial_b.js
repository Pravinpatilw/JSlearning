function factorialOfWordsCount(str)
{
    var str ;
    if(str == null || (typeof(str) == 'undefined') || (typeof str != "string" ))
    {
         console.log(`please provide valid input`);
     }
   
    if((typeof str == "string"))
    {
       
        var splitResult = str.split(" ");
       var count=splitResult.length;
      console.log(`${str} : no. of words present in given string: ${count}` ); 
     
       var factorial =1;
       for(index=(count);index>=1;index--){
               
              factorial=factorial* index;
                
           }
            console.log(`factorial of count of words :${factorial}`);


    }
  
     }

factorialOfWordsCount("Revision is the mother of Success")
factorialOfWordsCount("We never fail, we always learn")
factorialOfWordsCount(null)
factorialOfWordsCount("")
factorialOfWordsCount("Pravin Gajanan Patil")









// if(str == ""){
//     var splitResult = str.split("");
//     var count=splitResult.length;
// console.log(`${str} : no. of words present in given string: ${count}` ); 

// var factorial =1;
// for(index=(count);index>=1;index--){
       
//       factorial=factorial* index;
// }
// console.log(`factorial of count of words :${factorial}`);
// }
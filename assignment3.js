
function tscInterview(gredScore,hscScore,sscScore,candidateName){
    var result = (gredScore>=70 || hscScore>=86  || sscScore>=90) 
    ? `congrates  ${candidateName} you are eligible for Tcs` : ' unfortunately you are not eligible for interview' ;
    console.log(result);
 }
   tscInterview(80,86,90 ,"pravin");
   tscInterview(70,65,55 ,"Anil");
   tscInterview(60,79,88 ,"Sid");
  

var  vowelCount= function (str) {
    var count =0;
    console.log(`${str}`);
     for (let index =0; index<=str.length-1; index++) {
       if(str.charAt(index) == "a" || str.charAt(index) == "e" || str.charAt(index) == "i" || str.charAt(index) == "o" || str.charAt(index) == "u"||str.charAt(index) == "A" || str.charAt(index) == "E" || str.charAt(index) == "I" || str.charAt(index) == "O" || str.charAt(index) == "U") 
     
       {
        count++;
        
       }
      
      
        }    
        
         console.log(`${count}`);
        return count;
   
}
  vowelCount ("JavaScript is a laguage of internet")
  vowelCount ("I am Angular Developer")
  vowelCount ("Hard work and commitment is the  key of success")

  console.log("**************");

  function lastWordcharsCount(str){
    var len=0;
   var newStr = str.trim();
 
    for (let index = 0; index < newStr.length; index++) {
        if (newStr[index] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
 console.log(`Total characters present in last word of string -->"${str}":${len}`);
    return len;

  }


lastWordcharsCount("JavaScript is a laguage of internet")
lastWordcharsCount("I am Angular Developer")
lastWordcharsCount("Hard work and commitment is the  key of success")


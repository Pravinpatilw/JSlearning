function factorialOfNum(num) {
var num;


if (isNaN(num) || num == null || (typeof(num) == 'undefined') )
{
    console.log(`${num} is invalid.Please provide valid input. `);

}else
{   
     var factorial=1;
    for(index=(num);index>=1;index--){
    
    factorial=factorial* index;
    
}
console.log(`factorial of ${num} is :${factorial}.`);
}
   
 return factorial;

}
factorialOfNum(5) 
factorialOfNum(3) 
factorialOfNum(null) 
factorialOfNum(8) 
factorialOfNum(undefined) 
factorialOfNum(9) 
factorialOfNum(0) 
factorialOfNum(NaN) 




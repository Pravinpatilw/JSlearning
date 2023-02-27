console.log(`*******Step1*******`);

function voteEligiblity(age) {
    if (age>=18 && age<=120) {
        var result = `Hey your ${age} eligible for vote`;
        console.log(result);
        
    } else {
        if(age<=0 || age == null|| age>=120)
        {
            var result = `Hey please provide  ${age} valid value`;
    console.log(result);
        }
        else{
        var result = `hey your ${age} not eligible for vote`;
        console.log(result);
        }
    }
// if(age<=0 || age == null|| age>=120)
// {
//     var result = `Hey please provide  ${age} valid value`;
//     console.log(result);
    
// } 
    
}
var result = voteEligiblity(45); 
var result = voteEligiblity(17);
var result = voteEligiblity(20);
var result = voteEligiblity(8);
var result = voteEligiblity(-10);
var result = voteEligiblity(200);
var result = voteEligiblity(0);
var result = voteEligiblity(null);
var result = voteEligiblity();

console.log(`*******Step2******`);

function gradeCalculation(marks) {
    
if(marks>=90 && marks <=100){
    console.log(`funtastic marks:  ${marks} your grade is A+`);
} 
else{
    if (marks>=75 &&  marks<90 ){
console.log(`excellent marks  ${marks} ,your grad is A`);
}else{

if (marks>=50 && marks<75){
    console.log(`good marks :  ${marks} your grad is B`);

}else{

if (marks >=35 && marks<50){
    console.log(`Marks is ${marks}, your grade is C ,need improvement `);

}else{


    if(marks<=0 || marks > 100 || marks == null ||  (typeof marks!= NaN) || (typeof marks!= "number")){
        console.log(`Please provide the valid marks  ${marks}`);
    }
}
}
}
}
}
var marks =gradeCalculation(98);
var marks =gradeCalculation(80);
var marks =gradeCalculation(90);
var marks =gradeCalculation(0);
var marks =gradeCalculation(150);
var marks =gradeCalculation(-7);
var marks =gradeCalculation(35);
var marks =gradeCalculation(29);
var marks =gradeCalculation(64);
var marks =gradeCalculation(49);
var marks =gradeCalculation("91");
var marks =gradeCalculation("eighty");
var marks =gradeCalculation(NaN);
var marks =gradeCalculation(null);


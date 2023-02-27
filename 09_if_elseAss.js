function tcsinterviewEligiblity(gradScore,hscScore,sscScore,candidateName) {
    if (gradScore>=70 || hscScore>=80 ||sscScore>90){
        console.log(`congrates ${candidateName} you are eligible for TCS interview`);

    }else{
        console.log(`Unfortunatly ${candidateName} you are not eligible for interview` );
    }


    
}
tcsinterviewEligiblity (80,86,90,"Pravin");
tcsinterviewEligiblity (70,65,55,"Anil");
tcsinterviewEligiblity (60,79,88,"Sid");
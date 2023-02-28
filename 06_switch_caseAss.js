function monthOfYear(monthNumber) {
 switch (monthNumber) {
    case 2:
        console.log(`the ${monthNumber} month isfebruary `);
        break;
        case 5:
            console.log(`the ${monthNumber} month is May `);
            break;

            case 12:
        console.log(`the ${monthNumber} month is December  `);
        break;

    default:
        
     console.log(`invalid month ${monthNumber}`);
        break;
 }   
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);


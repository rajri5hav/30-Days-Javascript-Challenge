//+++++++++++++++++ If-Else Statements +++++++++++++++++++

const num = 3;

if (num > 0) {
    console.log(`${num} is positive`);
}
else if(num < 0) {
    console.log(`${num} is negative`);
}
else{
    console.log("Zero");
}


const personAge = 19;

if (personAge >= 18) {
    console.log("Person is eligible for vote");
}
else{
    console.log("Person is Minor");
}


//+++++++++++++++++ Nested If-Else Statement ++++++++++++++

let num1 = 7;
let num2 = 8;
let num3 = 9;

if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is largest`);
    }else{
        console.log(`${num3} is largest`);
    }
}else{
    if(num2 > num3){
        console.log(`${num2} is largest`);
    }else{
        console.log(`${num3} is largest`);
    }
}


//+++++++++++++++++ Switch Case ++++++++++++++++++++

const weekDayNo = 2;
switch (weekDayNo) {
    case 1 : 
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 : 
        console.log("Wednesday");
        break;
    case 4 : 
        console.log("Thrusday");
        break;
    case 5 : 
        console.log("Friday");
        break;
    case 6 : 
        console.log("Saturday");
        break;
    case 7 : 
        console.log("Sunday");
        break;

    default:
        break;
}

const score = 90;
switch (score) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 50:
        console.log("E");
        break;
    case 40:
        console.log("F");
        break;

    default:
        break;
}


//+++++++++++++++++++++++ Conditional Operator ++++++++++++++++++

const seatNumber = 13;
const seat = seatNumber%2==0 ? "Even" : "Odd";
console.log(seat);


//++++++++++++++++++++++ Combining Conditions ++++++++++++++++++++

const year = 2024;

if((year % 4 == 0 && year % 100 !== 0 )||(year % 400 == 0)){
    console.log(`${year} is leap year`);
}
else{
    console.log(`${year} is not leap year`);
}

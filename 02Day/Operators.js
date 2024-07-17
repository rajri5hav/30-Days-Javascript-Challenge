//++++++++++++++++ Arithmetic Operatiors +++++++++++++++++++

let num1 = 4;
let num2 = 5;
let result = num1 + num2;
console.log(result);


num1 = 8;
num2 = 3;
result = num1 - num2;
console.log(result);


num1 = 9;
num2 = 4;
result = num1 * num2;
console.log(result);


num1 = 8;
num2 = 2;
result = num1 / num2;
console.log(result);


num1 = 9;
num2 = 2;
result = num1 % num2;
console.log(result);


//++++++++++++++++ Assignment Operatiors ++++++++++++++++

let numA = 6
result = numA += 3
console.log(result);


numA = 8
result = numA -= 5
console.log(result);

//++++++++++++++++ Comparison Operators ++++++++++++++++++

const numberOfPencils = 7;
const numberOfErasers = 9;
let comparison = numberOfPencils > numberOfErasers;
console.log(comparison);

comparison = numberOfPencils < numberOfErasers;
console.log(comparison);


const indiaScore = 350;
const australiaScore = 320;
let matchScore = indiaScore >= australiaScore;
console.log(matchScore);

matchScore = australiaScore <= indiaScore;
console.log(matchScore);


const mathMarks = 80;
const scienceMarks = "80";
let marks = mathMarks == scienceMarks;
console.log(marks);

marks = mathMarks === scienceMarks;
console.log(marks);

//++++++++++++++++++ Logical Operator ++++++++++++++++++

const userName = "Rishav123";
const userPassword = 12345;

if(userName && userPassword) {
    console.log("loggedIn");
}
else{
    console.log("enter username and password");
}


const rollNo = 30;
const regNo = 18;

if(rollNo || regNo){
    console.log("Allowed for viva");
}


const haveDrivingLicense = true;

if(!haveDrivingLicense){
    console.log("not ready for driving");
}
else{
    console.log("Drive safe");
}

//+++++++++++++++++++ Ternary Operator ++++++++++++++++

const num = -4;
const message = num >= 0 ? "Positive" : "Negative";
console.log(message);
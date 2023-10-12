// my first JavaScript function

let num1, num2, num3;
num1 = +prompt("Please enter first number");
num2 = +prompt("Please enter second number");
num3 = +prompt("Please enter third number");

alert(myfunction(num1, num2, num3));

function myfunction(param1, param2, param3){
    return param1 + param2 + param3;
}
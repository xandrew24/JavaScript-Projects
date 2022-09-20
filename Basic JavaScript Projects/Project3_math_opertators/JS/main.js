function addition_Function() {
    var addition = 2 + 2;   
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;          //shows how to use addition
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;      //shows how to use subtraction
}

function multiplication_Function() {
    var simple_math = 6 * 6;
    document.getElementById("Math3").innerHTML = "6 * 6 = " + simple_math;      //shows how to use multiplication
}

function division_Function() {
    var division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division;        //shows how to use division
}

function more_math() {
    var simple_math2 = (1 + 2) * 10 /2 -5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math2      //how to use javascript to solveclong math problems
}

function modulus_Operator() {
    var simple_math3 = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math3;    //shows how to use different operators
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

var B = 5;                                          // shows that ++ makes the number go up one
B++;
document.write(B);

var A = 5.25;                                          // shows that -- makes the number go down by one
A--;
document.write(A);

window.alert(Math.random() * 100);                      // picks random number 1 - 100

function sqrt_Operator() {
    var square = Math.sqrt(625);
    document.getElementById("Math8").innerHTML = "The Square root of 625 is: " + square;            //shows how to get the square root of 625
}

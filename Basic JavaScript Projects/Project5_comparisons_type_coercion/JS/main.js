document.write(typeof "Word");                                                  //shows how to use typeof function

document.write(typeof 5);

document.write("10" + 5);

function my_Function1() {
    document.getElementById("Test1").innerHTML = 0/0;
}


function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');      //shows how to use isNaN
}


function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

function Infinity1() {
    document.getElementById("Test4").innerHTML = 2E310                            //infinity
}

function Infinity2() {
    document.getElementById("Test5").innerHTML = -2E310                             //negative infinity
}

function Boolean1() {
    document.getElementById("Test6").innerHTML = 10 > 2;                            //examples of boolean
}

function Boolean2() {
    document.getElementById("Test7").innerHTML = 10 < 2;
}

console.log(2 + 2);                                                             //console log math operations
console.log(10 > 12);

function True() {                                                               //examples of true and false for ==
    document.getElementById("Test8").innerHTML = 10 == 10;
}


function False() {
    document.getElementById("Test9").innerHTML = 10 == 2;
}

function Triple_Equal1() {                                                  //shows examples of triple equal sign
    X = 10;
    Y = 10;
    document.getElementById("Test10").innerHTML = X === Y;
}

function Triple_Equal2() {
    A = 10;
    B = 12;
    document.getElementById("Test11").innerHTML = A === B;
}

function Triple_Equal3() {
    A = 10;
    B = "10";
    document.getElementById("Test12").innerHTML = A === B;
}

function Triple_Equal4() {
    A = 10;
    B = "12";
    document.getElementById("Test13").innerHTML = A === B;
}

function ANDT() {
    document.getElementById("Test14").innerHTML = 5 > 2 && 10 > 4;                      //shows AND used for true and fals
}

function ANDF() {
    document.getElementById("Test15").innerHTML = 5 > 10 && 10 > 4;                         
}

function ORT() {
    document.getElementById("Test16").innerHTML = 5 > 2 || 10 > 4;                      //shows OR used for true and false
}

function ORF() {
    document.getElementById("Test17").innerHTML = 5 > 10 || 10 > 20;
}

function NOTT() {
    document.getElementById("Test18").innerHTML = !(5 > 10);                            //shows NOT used for true and false
}
function NOTF() {
    document.getElementById("Test19").innerHTML = !(20 > 10);
}
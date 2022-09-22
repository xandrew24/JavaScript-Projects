var X = 10;                                                                 //global variables examples
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3() {                                              //Local variable example
    var x = 10;                                                         // if the variable is inside the funciotn it can only be used for that function, if its outside then its a global variable
    document.write(20 + x + "<br>");
}
function Add_numbers_4() {
    document.write(x + 100);
    }
Add_numbers_3()
Add_numbers_4()


function Add_numbers_5() {                                              // console.log
    var B = 10;
    console.log(15 + B);
}
function Add_numbers_6() {
    console.log(B + 100);
}
Add_numbers_5()
Add_numbers_6()


if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")          //If statement and same below
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {                                                           //age function to see if you can drive or not using IF and Else
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You are old enough to drive!";
    }
    else {
        Drive = "You are not old enough to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}


function Time_function() {                                                              //Time function using IF Else and Else IF
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
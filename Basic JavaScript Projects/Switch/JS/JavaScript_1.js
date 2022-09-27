function Color_Function() {                                     //example of using switch element
    var Colors_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Colors_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Colors_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Colors_Output = "Green" + Color_String;
        break;
        case "Blue":
            Colors_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Colors_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Colors_Output = "Purple" + Color_String;
        break;
        default:
        Colors_Output = "PLease enter acolor exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Colors_Output;            
}

function Hello_World_Function() {                                           //example of getelementsbyclassname
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("canvas");                      //example of a canvas graphic
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
ctx.font = "30px Arial";
ctx.strokeText("Hello World",100,200);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);




function Call_loop() {                                              //example of how to call a loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function Length_prop() {                //example of using length property and also the let keyword
    let text = "hello World!";
    let length = text.length;
    document.getElementById("LP").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet","Flute"];                    //example of for loop function
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function() {                                                 //example of an array as a function
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        Dog_Picture[2] + "";

}

function constant_Function() {                                                      //example of a constant function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

document.getElementById("return").innerHTML = myFunction("Andrew");
function myFunction(name) {
    return "Hello " + name;
}

let pokemon = {                                             //example of creating an object
    name: "Charmander, ",
    type: "Fire type ",
    evolution: "Charizard ",
    description: function() {
        return "The pokemon is " + this.name + "and is a " + this.type + "and also eventually evolves into " + 
            this.evolution; 
    }

};
document.getElementById("Pokemon_Object").innerHTML = pokemon.description();

let text = "";              //example of using a break in a loop
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "the number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

let word = "";              //example of using continue in a loop
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    word += "the number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = word;
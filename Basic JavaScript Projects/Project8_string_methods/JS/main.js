function full_Sentence() {                                                  //using concatenatecto put strings togethor to make a sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}


function slice_Method() {                                                   //using slice to single out one part of the string as an output
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function find() {                                                               //using search() to find the position blue is in
let text = "Mr. Blue has a blue house"
let position = text.search("blue");
document.getElementById("demo").innerHTML = position;
}

function Upper() {                                                              //maes the text all upper case
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;

}

function string_Method() {                                                      // returns a number as a string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {                                                   //formats a number to a specified length
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function numberfixed() {                                                       //rounds the number up or down based on what the number is closest to
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("number").innerHTML = n;
}

function Primitive() {                                                  //finds the primitive of a string
    let text = "Hello World!"
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}
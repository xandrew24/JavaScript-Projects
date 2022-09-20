function myFunction() {                                                     // Button to show how to make a button
    var x = document.getElementById("You Only Live Once").id;               // what is shown when the button is clicked 
    document.getElementById("Paragraph").innerHTML = x;                     //paragraph as my ID        
  }


  function button() {                                                       // the function name
    var sentence = "I am Learning";                                         // what is shown when the clicl here is clicked
    sentence += " a lot from this book!";                                   // also shown
    document.getElementById("Concatenate").innerHTML = sentence;            
  }
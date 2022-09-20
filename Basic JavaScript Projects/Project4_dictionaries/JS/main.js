function my_Dictionary() {
    var Animal = {                                                      // this is a KVP dictionary also a "class"
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;                                                // delete the Animal.Sound Variable
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
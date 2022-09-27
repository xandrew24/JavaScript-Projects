function displayType(pokemon) {
    var pokemonType = pokemon.getAttribute("data-pokemon-type");
    alert(pokemonType + " is a " + pokemon.innerHTML + " type!");
}
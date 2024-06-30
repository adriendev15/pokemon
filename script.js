function displayMessage() {
  alert("Bonjour Adrien!");
}

async function displayPokemon() {
  const reponse = await fetch("https://tyradex.vercel.app/api/v1/pokemon/pikachu");
  const pokemon = await reponse.json();
  alert("nom: " + pokemon.name.fr + "\ncatégorie: " + pokemon.category);
}


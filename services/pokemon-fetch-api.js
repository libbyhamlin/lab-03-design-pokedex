const URL =
  'https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=char&defense=50';

export async function getMovies() {
    const response = await fetch(URL);
    return await response.json();
}



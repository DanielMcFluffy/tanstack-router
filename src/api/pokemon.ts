interface PokemonDetail {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

//we will use this get method function on the loader for the pokemon/id routes
export async function getPokemon(id: string): Promise<PokemonDetail> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
}

///////////////////////////// below is the get all data
interface Pokemon {
  id: string;
  name: string;
}

export async function getPokemonList(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = (await response.json()) as {
    results: { name: string; url: string }[];
  };

  return data.results.map((r) => ({
    id: r.url.split("/").slice(-2, -1)[0],
    name: r.name,
  }));
}

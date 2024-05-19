import { Link, createFileRoute } from "@tanstack/react-router";
import { getPokemonList } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/")({
  component: PokemonList,
  loader: getPokemonList, //since there is no $id params in our url, we don't have to pass params here unlike in the $id.tsx
});

function PokemonList() {
  const pokemons = Route.useLoaderData(); //we get the data that's been loaded from the getPokemonList method
  return (
    <>
      <h2>Pokemons</h2>
      <ul>
        {/* below is an example of dynamically rendering our data based on the also dynamic route */}

        {/* the idea is finding a way to iterate and using an id property to connect to the params prop, which will also map to the 'to' prop */}
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              to={"/pokemon/$id"}
              params={{
                id: pokemon.id,
              }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { getPokemon } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/$id")({
  component: Pokemon,
  //say you want to get the data before the route loads, use loader -- refer to api/pokemon.ts
  loader: async ({ params }) => await getPokemon(params.id), //encapsulate params with {} in order for it to be 'rendered' fully so we can extract out id -- mostly due to tsx correctly inferring the type
});

function Pokemon() {
  //after the defining the route, use it in the function
  const { id } = Route.useParams();
  const pokemon = Route.useLoaderData(); // use the data loaded from the loader that we assigned in the createFileRoute config
  console.log(pokemon);
  return (
    <>
      <h1>
        {pokemon.name} with id {id}
      </h1>
      <div>
        <img src={pokemon.sprites.front_default} alt="sprites" />
      </div>
    </>
  );
}

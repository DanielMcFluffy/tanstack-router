//this section is focused on how can we setup our url with query parameters
import { createFileRoute, useNavigate } from "@tanstack/react-router";
//we first start on wanting to figure out a way to match our query parameters to this interface
interface ItemFilters {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
}

type Category = "electronics" | "clothing" | "books" | "toys";

export const Route = createFileRoute("/search")({
  //validate search reads our query parameters and returns the mapped query object
  //
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      //validatesearch search param is a record type (an object with string 'key' and unknown 'value')
      //we need to cast the unknown values as below to resolve the type from being unknown -- we cast based on the interface of Itemfilters
      query: search.query as string,
      hasDiscount: search.hasDiscount as boolean,
      categories: (search.categories as string).split(",") as Category[],
    };
  },
  component: Search,
});

function Search() {
  const { categories, query, hasDiscount } = Route.useSearch(); //useSearch method enables us to access the query parameters

  const navigate = useNavigate({ from: Route.fullPath }); //this enables navigation from the current route

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };
  //above here uses es6 spread operator and then updates the corresponding keys dynamically using [name] -- it targets the existing keys and its value is updated based on the value parameter

  //e.g. updatedFilters('test', 10) -> [name]: value = test: 10 but if we do name: value
  //it will just add the property name: 10 to our existing object

  return (
    <>
      {/* <div>
        <h1>Search</h1>
        <input
          value={query}
          onChange={(e) => {
            //we are essentially navigating to the previous route (...prev) and then updating it(the 'query' parameter) with the new query information
            //the end-result is real-time url updates based on the input here
            navigate({
              search: (prev) => ({ ...prev, query: e.target.value }),
            });
          }}
        />
        <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
      </div> */}
      <div>
        <h2>Search</h2>
        You searched for:{" "}
        <input
          value={query}
          onChange={(e) => {
            updateFilters("query", e.target.value);
          }}
        />
        <input
          type="checkbox"
          checked={hasDiscount}
          onChange={(e) => updateFilters("hasDiscount", e.target.checked)}
        />
        <select
          multiple
          onChange={(e) => {
            updateFilters(
              "categories",
              Array.from(e.target.selectedOptions, (option) => option.value)
            );
          }}
          value={categories}
        >
          {["electronics", "clothing", "books", "toys"].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
      </div>
    </>
  );
}

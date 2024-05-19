//below are imports needed for the react application to know the existence of our route config from the routeTree
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";

//where we create the instance of router to be used all over the application
const router = createRouter({
  routeTree,
  context: { authentication: undefined! }, //after defining the authentication context type in root, add the context field in this way for initial setup/stage of the application
});
//we are extending the Register interface from the tanstack router module to include the router as a type of our router instance -- this establishes type-safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const authentication = useAuth(); //we want routerprovider to use this hook somehow
  return (
    <RouterProvider
      router={router}
      context={{ authentication: authentication }}
    />
  );
};

export default App;

//in other projects, you may consider creating a file only for the routeTree config section so that we can maintain separation of concern for App.tsx

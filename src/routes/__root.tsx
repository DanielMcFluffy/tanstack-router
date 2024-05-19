//this is the root route
//it is responsible for managing other routes
//while setting up tanstack-router, other file routes created will generate their own createRoute template however __root will still be empty and pending configuration by you using creatRootRoute/Link/Outlet

import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";

const activeProps = {
  style: { color: "red" },
};

//we define a router context that will define the auth type context to be passed into the routerprovider in app.tsx
interface RouterContext {
  authentication: AuthContext;
} //after defining the interface, replace this (if havent) the createRootRoute with createRootRouteWithContext

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <h1>My app</h1>
      <ul>
        <li>
          {/* activeProps is to style our Link element whenever it's active */}
          <Link to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" activeProps={activeProps}>
            {(isActive) => {
              return <>Profile {isActive && "~"}</>;
            }}
            {/* we can conditionally render the Link name based on the isActive(booelan) attribute */}
          </Link>
        </li>
        {/* example of a static routing with attempts to convert to dynamic */}
        {/* <li>
          <Link
            to="/pokemon/$id" // as we have created a file route of routes/pokemon/$id.tsx, typescript gave us available routes on the 'to' prop.
            //to set a specific id on the url on user click, pass in a params configuration as below
            params={{
              id: "5",
            }}
            activeProps={activeProps}
          >
            Charizard
          </Link>
        </li> */}
        <li>
          <Link to="/pokemon" activeProps={activeProps}>
            Pokemons
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            activeProps={activeProps}
            // similar to the param attribute, search sets our url to have the query parameters of the following fields with its corresponding value below
            //as in user clicks on this Link, it will assign the values we've given to the query params
            search={{
              query: "hello",
              hasDiscount: true,
              categories: ["electronics"],
            }}
          >
            Search
          </Link>
        </li>
        <li>
          <Link to="/login" activeProps={activeProps}>
            Login
          </Link>
        </li>
        <li>
          {/* notice how the dashboard and settings route are not required to have the /authenticated/dashboard prefix as we have put an underscore '_' in front of the file name -- it sets it so it won't show up in url */}
          <Link to="/dashboard" activeProps={activeProps}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/settings" activeProps={activeProps}>
            Settings
          </Link>
        </li>
        <li>
          <Link to="/first-level" activeProps={activeProps}>
            First level
          </Link>
        </li>
        <li>
          <Link to="/layouts/visibleLayout" activeProps={activeProps}>
            Layouts
          </Link>
        </li>
        <li>
          <Link to="/layouts/foo" activeProps={activeProps}>
            Hidden Layouts foo
          </Link>
        </li>
        <li>
          <Link to="/layouts/bar" activeProps={activeProps}>
            Hidden Layouts bar
          </Link>
        </li>
      </ul>
      {/* this is where the routes we register will be rendered */}
      <Outlet />
    </>
  ),
  notFoundComponent: () => <div>I'm the not found page for the root route</div>, //this will render a 404 page for the root route, we can create a custom 404 page for a specific nested route -- refer to the visiblelayout.tsx folder
});
